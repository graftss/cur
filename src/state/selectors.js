import { curry, map, mapObjIndexed, prop, useWith } from 'ramda';

import * as appraisals from './appraisals/selectors';
import * as router from './router/selectors';
import * as tabs from './tabs/selectors';
import * as user from './user/selectors';
import { mergeValues, pickDefined } from '../utils';

const baseSubstateSelectors = {
  appraisals,
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

// TODO: check for unique selector names

const substateSelectors = mergeValues(substateSelectorsByType);

export const selectors = { ...substateSelectors };

export const mapSelectorsToProps = curry((selectorNames, state) => (
  map(selector => selector(state), pickDefined(selectorNames, selectors))
));
