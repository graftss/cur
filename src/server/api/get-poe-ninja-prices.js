const Promise = require('bluebird');
const request = require('request-promise');
const {
  compose,
  has,
  ifElse,
  map,
  mapObjIndexed,
  mergeAll,
  pick,
  prop,
  reduce,
  values,
} =  require('ramda');

const endpointUri = type => `http://poe.ninja/api/Data/Get${type}Overview`;

const uris = map(endpointUri, {
  currency: 'Currency',
  divinationCard: 'DivinationCards',
  essence: 'Essence',
  fragment: 'Fragment',
  map: 'Map',
  uniqueMap: 'UniqueMap',
});

const addLeagueQuerystring = league => uri => `${uri}?league=${league}`;

const sanitizeCurrencyProps = data => ({
  name: data.currencyTypeName,
  chaosValue: data.chaosEquivalent,
});

const parseChaosValue = ifElse(
  has('chaosEquivalent'),
  compose(sanitizeCurrencyProps, pick(['currencyTypeName', 'chaosEquivalent'])),
  pick(['name', 'chaosValue'])
);

const parseResponse = compose(
  map(parseChaosValue),
  prop('lines'),
  JSON.parse
);

const requestJson = uri => request(uri).then(parseResponse)

const itemPriceObj = (name, value, type) => ({ [name]: { value, type } });

const priceListToPriceMap = (list, type) => reduce(
  (obj, item) => Object.assign(obj, itemPriceObj(item.name, item.chaosValue, type)),
  {},
  list
);

const mergePrices = compose(
  mergeAll,
  values,
  mapObjIndexed(priceListToPriceMap)
);

module.exports = league => (
  Promise.props(
    map(compose(requestJson, addLeagueQuerystring(league)), uris)
  ).then(mergePrices)
);
