import axios from 'axios';
import qs from 'querystring';
import { push } from 'react-router-redux';

import { loginFailure, loginRequest, loginSuccess } from './user/actions';

export { push };
export * from './user/actions';

const server = 'http://localhost:3333/api';
const url = {
  tabs: (username, poesessid, tabIds) => (
    `${server}/tabs?${qs.stringify({ username, poesessid, tabIds })}`
  ),
};

export const login = (username, poesessid) => (
  dispatch => {
    dispatch(loginRequest());

    axios.request({
      url: url.tabs(username, poesessid),
      responseType: 'json',
    })
      .then(a => {
        dispatch(loginSuccess(username, poesessid));
      })
      .catch(a => {
        dispatch(loginFailure());
      });
  }
);
