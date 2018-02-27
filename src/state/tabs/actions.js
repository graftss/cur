import {
  argCreator,
  constantCreator,
  keyMirror,
} from '../../utils';

export const TYPES = keyMirror([
  'TABS_FAILURE',
  'TABS_REQUEST',
  'TABS_SUCCESS',
]);

export const tabsRequest = constantCreator(TYPES.TABS_REQUEST);

export const tabsSuccess = argCreator(TYPES.TABS_SUCCESS, ['tabs']);
