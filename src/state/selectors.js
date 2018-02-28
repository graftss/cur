import { curry, map, mapObjIndexed, prop, useWith } from 'ramda';

import * as appraisals from './appraisals/selectors';
import * as items from './items/selectors';
import * as prices from './prices/selectors';
import * as router from './router/selectors';
import * as tabs from './tabs/selectors';
import * as user from './user/selectors';
import { mergeValues, pickDefined } from '../utils';
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
  return {
    appraisalItems: curry((state, appraisalId) => {
      const appraisal = selectors.appraisalById(state, appraisalId);
      const tabIds = appraisalSchema.tabIds(appraisal);
      return selectors.itemsByTabId(state, tabIds);
    }),
  };
})();

export const selectors = { ...substateSelectors, ...computedSelectors };

export const mapSelectorsToProps = curry((selectorNames, state) => (
  map(selector => selector(state), pickDefined(selectorNames, selectors))
));
