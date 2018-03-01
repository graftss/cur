import { createSelector } from 'reselect';
import {
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
import * as logs from './logs/selectors';
import * as prices from './prices/selectors';
import * as router from './router/selectors';
import * as tabs from './tabs/selectors';
import * as user from './user/selectors';

import appraiseItems from './appraiseItems';
import { mergeValues, pickDefined } from '../utils';

const baseSubstateSelectors = {
  appraisals,
  items,
  logs,
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
    substateSelectors.trackedAppraisalId,
    (allAppraisals, appraisalId) => allAppraisals.find(a => a.id === appraisalId),
  );

  const editingAppraisal = createSelector(
    substateSelectors.allAppraisals,
    substateSelectors.editedAppraisalId,
    (allAppraisals, appraisalId) => allAppraisals.find(a => a.id === appraisalId),
  );

  const trackedAppraisalItemsByTabId = createSelector(
    substateSelectors.allItems,
    trackedAppraisal,
    (allItems, appraisal) => appraisal ? pick(appraisal.tabIds, allItems) : {},
  );

  const appraisedItems = createSelector(
    substateSelectors.standardPrices,
    trackedAppraisalItemsByTabId,
    (prices, itemsByTabId) => {
      const items = reduce(concat, [], values(itemsByTabId));
      return appraiseItems(prices, items);
    },
  );

  return {
    appraisedItems,
    editingAppraisal,
    trackedAppraisal,
  };
})();

export const selectors = { ...substateSelectors, ...computedSelectors };

export const mapSelectorsToProps = curry((selectorNames, state) => (
  map(selector => selector(state), pickDefined(selectorNames, selectors))
));
