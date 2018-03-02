import {
  assocPath,
  compose,
  curry,
  filter,
  map,
  merge,
  prop,
  reduce,
  sortBy,
  sum,
  values,
} from 'ramda';
import { roundToPlaces } from '../utils';

const getItemBaseName = name => {
  name = name.replace(/<<[^<>]*>>/g, '');

  if (name.endsWith('Map') && name.startsWith('Superior ')) {
    name = name.replace(/^Superior /, '');
  }

  return name;
};

const parseItem = (item) => {
  const { icon, stackSize, typeLine } = item;

  return {
    iconUrl: icon,
    name: getItemBaseName(typeLine),
    quantity: stackSize || 1,
  };
};

const countReducer = (result, item) => {
  const { name, quantity } = item;

  return result[name] ?
    assocPath([name, 'quantity'], result[name].quantity + quantity, result) :
    assocPath([name], item, result);
};

const countItems = items => reduce(countReducer, {}, items);

const addValue = prices => item => merge(item, prices[item.name]);

const hasValue = item => item.value !== undefined;

const roundTotal = roundToPlaces(2);

const addTotalValue = item => merge(
  item,
  { totalValue: roundTotal(item.value * item.quantity) }
);

const decreasingTotalValue = item => -item.totalValue;

const itemsTotalValue = compose(
  roundTotal,
  sum,
  map(prop('totalValue'))
);

const attachMetadata = items => ({
  items,
  totalValue: itemsTotalValue(items),
});

export const appraiseParsedItems = curry((prices, items) => (
  compose(
    attachMetadata,
    sortBy(decreasingTotalValue),
    map(addTotalValue),
    filter(hasValue),
    map(addValue(prices)),
    values,
    countItems,
  )(items)
));

export default (prices = {}, tabResponses = []) => (
  compose(
    appraiseParsedItems(prices),
    map(parseItem),
  )(tabResponses)
);
