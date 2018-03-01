import { createSelector } from 'reselect';
import {
  assoc,
  concat,
  curry,
  map,
  mapObjIndexed,
  pick,
  prop,
  reduce,
  useWith,
  values,
} from 'ramda';

import * as appraisals from './appraisals/selectors';
import * as items from './items/selectors';
import * as prices from './prices/selectors';
import * as router from './router/selectors';
import * as tabs from './tabs/selectors';
import * as user from './user/selectors';
import { mergeValues, pickDefined, roundToPlaces } from '../utils';
import { appraisalSchema } from './schema/appraisal';

const baseSubstateSelectors = {
  appraisals,
  items,
  prices,
  router,
  tabs,
  user,
};

const substateSelectorsByType = mapObjIndexed(
  (selectorMap, substateName) => (
    map(
      selector => useWith(selector, [prop(substateName)]),
      selectorMap,
    )
  ),
  baseSubstateSelectors,
);

// TODO: sanity check for unique selector names

const substateSelectors = mergeValues(substateSelectorsByType);

const computedSelectors = (() => {
  const trackedAppraisal = createSelector(
    substateSelectors.allAppraisals,
    substateSelectors.routeAppraisalId,
    (allAppraisals, appraisalId) => allAppraisals.find(a => a.id === appraisalId),
  );

  const trackedAppraisalItemsByTabId = createSelector(
    substateSelectors.allItems,
    trackedAppraisal,
    (allItems, appraisal) => pick(appraisal.tabIds, allItems),
  );

  const trackedAppraisalItemStacks = createSelector(
    trackedAppraisalItemsByTabId,
    (itemsByTabId) => {
      const combineStacks = (a, b) => a ? ({
        ...a,
        stackSize: a.stackSize + b.stackSize,
      }) : b;

      const combineStacksReducer = (combinedStacks, stack) => {
        const name = stack.typeLine;
        return assoc(name, combineStacks(combinedStacks[name], stack), combinedStacks);
      };

      const allItems = reduce(concat, [], values(itemsByTabId));
      const combinedStacksByName = reduce(combineStacksReducer, {}, allItems);
      return values(combinedStacksByName);
    },
  );

  const appraisedStacks = createSelector(
    trackedAppraisalItemStacks,
    substateSelectors.standardPrices,
    (stacks, prices) => {
      const round = roundToPlaces(2);

      const isPriced = stack => prices[stack.typeLine] !== undefined;
      const addValue = stack => ({
        ...stack,
        value: round(stack.stackSize * prices[stack.typeLine].value),
        type: prices[stack.typeLine].type,
      });

      const items = stacks
        .filter(isPriced)
        .map(addValue);

      const total = {
        value: round(items.reduce((acc, item) => acc + item.value, 0)),
      };

      return { items, total };
    },
  );

  return {
    appraisedStacks,
  };
})();

export const selectors = { ...substateSelectors, ...computedSelectors };

export const mapSelectorsToProps = curry((selectorNames, state) => (
  map(selector => selector(state), pickDefined(selectorNames, selectors))
));
