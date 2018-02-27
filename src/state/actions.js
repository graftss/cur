import axios from 'axios';
import qs from 'querystring';
import { push } from 'react-router-redux';

import { tabsSuccess } from './tabs/actions';
import { loginFailure, loginRequest, loginSuccess, loginVerify } from './user/actions';
import { selectors } from './selectors';

export { push };
export * from './tabs/actions';
export * from './user/actions';

const server = 'http://localhost:3333/api';
const url = {
  tabs: (username, poesessid, tabIds) => (
    `${server}/tabs?${qs.stringify({ username, poesessid, tabIds })}`
  ),
};

const requestLogin = (username, poesessid) => (
  axios.request({
    url: url.tabs(username, poesessid),
    responseType: 'json',
  })
);

const dispatchTabsResponse = dispatch => response => {
  dispatch(tabsSuccess(response.data.tabList));

  return response;
};

export const login = (username, poesessid) => (
  dispatch => {
    dispatch(loginRequest());

    requestLogin(username, poesessid)
      .then(dispatchTabsResponse(dispatch))
      .then(a => {
        dispatch(loginSuccess(username, poesessid));
      })
      .catch(a => {
        dispatch(loginFailure());
      });
  }
);

export const verifyLogin = () => (
  (dispatch, getState) => {
    const state = getState();
    const username = selectors.username(state);
    const poesessid = selectors.poesessid(state);

    dispatch(loginVerify());

    requestLogin(username, poesessid)
      .then(dispatchTabsResponse(dispatch))
      .then(a => {
        dispatch(loginSuccess(username, poesessid));
        console.log('a', a);
      })
      .catch(a => {
        dispatch(loginFailure());
      });
  }
);
