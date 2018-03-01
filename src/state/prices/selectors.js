import { compose, curry, prop } from 'ramda';

export const allPrices = prop('prices');

export const fetchingPrices = prop('fetching');

export const leaguePrices = curry((state, league) => (
  compose(
    prop(league),
    allPrices,
  )(state)
));

export const standardPrices = state => state.prices.Standard;
