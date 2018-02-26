const Promise = require('bluebird');
const qs = require('querystring');
const {
  addIndex,
  assoc,
  call,
  compose,
  curry,
  chain: flatMap,
  filter,
  map,
  mapObjIndexed,
  merge,
  pick,
  prop,
  range,
  zipWith,
} = require('ramda');

const indexedMap = addIndex(map);
const indexedFlatMap = addIndex(flatMap);

const poeUri = 'https://www.pathofexile.com';

const poeRequests = (sessionId, uris) => {
  const request = require('request-promise');

  const jar = request.jar();
  const sessidCookie = request.cookie(`POESESSID=${sessionId}`);
  jar.setCookie(sessidCookie, poeUri);
  const poeRequest = request.defaults({ jar });

  return Promise.all(map(poeRequest, uris))
    .then(map(JSON.parse));
};

// `getTabList` is expected to be boolean
const stashTabUri = curry((accountName, league, getTabList, tabIndex) => (
  `${poeUri}/character-window/get-stash-items?` +
    qs.stringify({ accountName, league, tabIndex, tabs: Number(getTabList) })
));

// In addition to the tab contents of each index passed in the input
// array, requests the full tab list in the first uri.
const getStashTabUris = (accountName, league, tabIndices) => (
  indexedMap(
    (tab, index) => stashTabUri(accountName, league, index === 0, tab),
    tabIndices
  )
);

const formatTabListEntry = (tab, index) => ({
  color: tab.colour,
  id: tab.id,
  index,
  name: tab.n,
});

const formatTabListResponse = compose(
  indexedMap(formatTabListEntry),
  prop('tabs'),
  prop(0)
);

const pickItemProps = item => ({
  stackSize: item.stackSize,
  typeLine: item.typeLine,
  // remove the query from the icon url
  icon: `${item.icon.replace(/\?.*/, '')}?scale=1`,
});

const formatTabItemsResponse = compose(
  map(pickItemProps),
  prop('items'),
);

const zipWithTabIndices = tabIndices => (
  zipWith((tabIndex, items) => ({ tabIndex, items }), tabIndices)
);

const formatItems = tabIndices => compose(
  zipWithTabIndices(tabIndices),
  map(formatTabItemsResponse)
);

const applyFormatters = tabIndices => json => ({
  tabList: formatTabListResponse(json),
  items: formatItems(tabIndices)(json),
});

// When an empty array of tab indices are requested, default it to [0]
// so that we'll still get the tab list.
const nonempty = arr => arr.length === 0 ? [0] : arr;

const getStashTabsByIndex = ({ accountName, league, sessionId, tabIndices }) => (
  poeRequests(
    sessionId,
    getStashTabUris(accountName, league, nonempty(tabIndices))
  )
    .then(applyFormatters(tabIndices))
);

const hasIdInSet = idSet => ({ id }) => idSet.has(id);

const getIndicesOfTabIds = tabIds => compose(
  map(prop('index')),
  filter(hasIdInSet(new Set(tabIds))),
  prop('tabList'),
);

const zipWithTabIds = tabIds => thing => (
  assoc('items', zipWith((tabId, tab) => merge({ tabId }, tab), tabIds, thing.items), thing)
);

const getStashTabsById = ({ accountName, league, sessionId, tabIds }) => (
  getStashTabsByIndex({ accountName, league, sessionId, tabIndices: [] })
    .then(getIndicesOfTabIds(tabIds))
    .then(tabIndices => (
      getStashTabsByIndex({ accountName, league, sessionId, tabIndices })
    ))
    .then(zipWithTabIds(tabIds))
);

module.exports = {
  getStashTabsById,
  getStashTabsByIndex,
};

