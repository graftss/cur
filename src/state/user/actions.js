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
]);

export const login = (username, poesessid) => (
  dispatch => {
    dispatch(loginRequest());
    dispatch(loginSuccess(username, poesessid));
  }
);

export const loginFailure = errorCreator(TYPES.USER_LOGIN_FAILURE);

export const loginRequest = constantCreator(TYPES.USER_LOGIN_REQUEST);

export const loginSuccess = argCreator(
  TYPES.USER_LOGIN_SUCCESS,
  ['username', 'poesessid'],
);
