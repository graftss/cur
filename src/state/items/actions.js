import {
  argCreator,
  constantCreator,
  errorCreator,
  keyMirror,
} from '../../utils';

export const TYPES = keyMirror([
  'ITEMS_REQUEST',
  'ITEMS_REQUEST_FAILURE',
  'ITEMS_REQUEST_SUCCESS',
]);

export const itemsRequest = constantCreator(TYPES.ITEMS_REQUEST);

export const itemsSuccess = argCreator(TYPES.ITEMS_REQUEST_SUCCESS, ['items']);

export const itemsFailure = errorCreator(TYPES.ITEMS_REQUEST_FAILURE);
