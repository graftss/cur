import { curry, prop } from 'ramda';

export const allTabs = prop('tabs');

export const fetchingTabs = prop('fetching');

export const leagueTabs = curry((state, league) => allTabs(state)[league] || []);
