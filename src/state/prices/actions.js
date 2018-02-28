import {
  argCreator,
  constantCreator,
  errorCreator,
  keyMirror,
} from '../../utils';

export const TYPES = keyMirror([
  'PRICES_FAILURE',
  'PRICES_REQUEST',
  'PRICES_SUCCESS',
]);

export const pricesRequest = constantCreator(TYPES.PRICES_REQUEST);

export const pricesSuccess = argCreator(TYPES.PRICES_SUCCESS, ['prices']);

export const pricesFailure = errorCreator(TYPES.PRICES_FAILURE);
