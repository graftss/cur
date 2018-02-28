import axios from 'axios';
import qs from 'querystring';
import { push } from 'react-router-redux';

import { itemsRequest, itemsSuccess } from './items/actions';
import { pricesFailure, pricesRequest, pricesSuccess } from './prices/actions';
import { appraisalSchema } from './schema/appraisal';
import { selectors } from './selectors';
import { tabsSuccess } from './tabs/actions';
import { loginFailure, loginRequest, loginSuccess, loginVerify } from './user/actions';

export { push };
export * from './appraisals/actions';
export * from './items/actions';
export * from './prices/actions';
export * from './tabs/actions';
export * from './user/actions';

const server = 'http://localhost:3333/api';
const url = {
  prices: () => `${server}/prices`,
  tabs: (username, poesessid, tabIds) => (
    `${server}/tabs?${qs.stringify({ username, poesessid, tabIds })}`
  ),
};

const requestPrices = () => (
  axios.request({
    url: url.prices(),
    responseType: 'json',
  })
);

const requestItems = (username, poesessid, tabIds) => (
  axios.request({
    url: url.tabs(username, poesessid, tabIds),
    responseType: 'json',
  })
);

const requestLogin = (username, poesessid) => requestItems(username, poesessid);

const dispatchTabsResponse = dispatch => response => {
  dispatch(tabsSuccess(response.data.tabList));
  dispatch(itemsSuccess(response.data.items));
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
      })
      .catch(a => {
        dispatch(loginFailure());
      });
  }
);

export const fetchAppraisalItems = appraisalId => (
  (dispatch, getState) => {
    const state = getState();
    const username = selectors.username(state);
    const poesessid = selectors.poesessid(state);
    const appraisal = selectors.appraisalById(state, appraisalId);
    const tabIds = appraisalSchema.tabIds(appraisal);

    return requestItems(username, poesessid, tabIds)
      .then(dispatchTabsResponse(dispatch))
      .catch(a => console.log("oops", a));
  }
);

export const fetchPrices = () => (
  dispatch => {
    dispatch(pricesRequest());

    requestPrices()
      .then(({ data }) => dispatch(pricesSuccess(data)))
      .catch(a => dispatch(pricesFailure()))
  }
);
