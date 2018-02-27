import {
  argCreator,
  constantCreator,
  errorCreator,
  keyMirror,
} from '../../utils';

export const TYPES = keyMirror([
  'USER_LOGIN_FAILURE',
  'USER_LOGIN_REQUEST',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_VERIFY',
]);

export const loginFailure = errorCreator(TYPES.USER_LOGIN_FAILURE);

export const loginRequest = constantCreator(TYPES.USER_LOGIN_REQUEST);

export const loginSuccess = argCreator(
  TYPES.USER_LOGIN_SUCCESS,
  ['username', 'poesessid'],
);

export const loginVerify = constantCreator(TYPES.USER_LOGIN_VERIFY);
