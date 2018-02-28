import { curry, pick, prop } from 'ramda';

export const allItems = prop('items');

export const fetchingItems = prop('fetching');

export const itemsByTabId = curry((state, tabIds) => pick(tabIds, allItems(state)));
