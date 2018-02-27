import { curry, map, mapObjIndexed, prop, useWith } from 'ramda';

import * as router from './router/selectors';
import * as user from './user/selectors';
import { mergeValues, pickDefined } from '../utils';

const baseSubstateSelectors = {
  router,
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

// TODO: check unique selector names

const substateSelectors = mergeValues(substateSelectorsByType);

const selectors = { ...substateSelectors };

export const mapSelectorsToProps = curry((selectorNames, state) => (
  map(selector => selector(state), pickDefined(selectorNames, selectors))
));
