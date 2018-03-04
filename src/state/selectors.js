import { createSelector } from 'reselect';
import {
  curry,
  map,
  mapObjIndexed,
  pick,
  prop,
  useWith,
  values,
} from 'ramda';

import * as appraisals from './appraisals/selectors';
import * as items from './items/selectors';
import * as league from './league/selectors';
import * as logs from './logs/selectors';
import * as prices from './prices/selectors';
import * as router from './router/selectors';
import * as tabs from './tabs/selectors';
import * as user from './user/selectors';

import appraiseItems, { appraiseParsedItems } from './appraiseItems';
import { concatAll, getTime, mergeValues, pickDefined } from '../utils';

const baseSubstateSelectors = {
  appraisals,
  items,
  league,
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
  const currentLeaguePrices = state => {
    const currentLeague = substateSelectors.currentLeague(state);
    return substateSelectors.leaguePrices(state, currentLeague);
  };

  const trackedAppraisal = createSelector(
    substateSelectors.allAppraisals,
    substateSelectors.trackedAppraisalId,
    (allAppraisals, appraisalId) => allAppraisals.find(a => a.id === appraisalId),
  );

  const trackedLog = state => {
    const { logById, trackedLogId } = substateSelectors;
    return logById(state, trackedLogId(state));
  };

  const editedLog = state => {
    const { logById, editedLogId }= substateSelectors;
    return logById(state, editedLogId(state));
  };

  const logDropdownOptions = createSelector(
    substateSelectors.allLogs,
    allLogs => allLogs.map(log => ({
      key: log.id,
      value: log.id,
      text: log.name,
    })),
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
    currentLeaguePrices,
    trackedAppraisalItemsByTabId,
    (prices, itemsByTabId) => {
      const items = concatAll(values(itemsByTabId));
      return appraiseItems(prices, items);
    },
  );

  const trackedAppraisalBatch = createSelector(
    appraisedItems,
    ({ items }) => items.map(pick(['name', 'quantity', 'iconUrl'])),
  );

  const trackedLogAppraisal = createSelector(
    currentLeaguePrices,
    trackedLog,
    (prices, log) => {
      const logItems = concatAll(log.batches.map(prop('items')));
      return appraiseParsedItems(prices, logItems);
    }
  );

  const trackedAppraisalSnapshot = state => {
    const items = appraisedItems(state);

    return {
      ...items,
      time: getTime()
    };
  };

  return {
    appraisedItems,
    editingAppraisal,
    editedLog,
    logDropdownOptions,
    trackedAppraisal,
    trackedAppraisalBatch,
    trackedAppraisalSnapshot,
    trackedLog,
    trackedLogAppraisal,
  };
})();

export const selectors = { ...substateSelectors, ...computedSelectors };

export const mapSelectorsToProps = curry((selectorNames, state) => (
  map(selector => selector(state), pickDefined(selectorNames, selectors))
));
