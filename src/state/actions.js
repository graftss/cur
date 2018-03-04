import axios from 'axios';
import qs from 'querystring';
import { push } from 'react-router-redux';

import { updateAppraisal } from './appraisals/actions';
import { itemsFailure, itemsRequest, itemsSuccess } from './items/actions';
import { setLeague } from './league/actions';
import { pricesFailure, pricesRequest, pricesSuccess } from './prices/actions';
import { appraisalSchema } from './schema/appraisal';
import { selectors } from './selectors';
import { tabsSuccess } from './tabs/actions';
import { loginFailure, loginRequest, loginSuccess, loginVerify } from './user/actions';

export { push };
export * from './appraisals/actions';
export * from './items/actions';
export * from './league/actions';
export * from './logs/actions';
export * from './prices/actions';
export * from './tabs/actions';
export * from './user/actions';

const server = window.location.hostname.includes('heroku') ?
  `${window.location.origin}/api` :
  'http://localhost:3333/api';

const url = {
  prices: () => `${server}/prices`,
  tabs: (username, poesessid, tabIds, league) => (
    `${server}/tabs?${qs.stringify({ username, poesessid, tabIds, league })}`
  ),
};

const requestPrices = () => (
  axios.request({
    url: url.prices(),
    responseType: 'json',
  })
);

const requestItems = (username, poesessid, tabIds, league) => (
  axios.request({
    url: url.tabs(username, poesessid, tabIds, league),
    responseType: 'json',
  })
);

const requestTabs = (username, poesessid, league) => (
  axios.request({
    url: url.tabs(username, poesessid, undefined, league),
    responseType:'json',
  })
);

const requestLogin = (username, poesessid) => requestItems(username, poesessid);

const dispatchTabsResponse = dispatch => response => {
  const { items, tabList, league } = response.data;

  dispatch(tabsSuccess(league, tabList));
  if (items.length) dispatch(itemsSuccess(items));

  return response;
};

export const login = (username, poesessid) => (
  dispatch => {
    dispatch(loginRequest());

    requestLogin(username, poesessid)
      .then(dispatchTabsResponse(dispatch))
      .then(a => {
        dispatch(loginSuccess(username, poesessid));
        dispatch(push('/all'));
      })
      .catch(err => dispatch(loginFailure(err)));
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
      .then(() => dispatch(loginSuccess(username, poesessid)))
      .catch(err => dispatch(loginFailure(err)));
  }
);

export const fetchAppraisalItems = appraisalId => (
  (dispatch, getState) => {
    const state = getState();
    const username = selectors.username(state);
    const poesessid = selectors.poesessid(state);
    const appraisal = selectors.appraisalById(state, appraisalId);
    const tabIds = appraisalSchema.tabIds(appraisal);
    const league = appraisalSchema.league(appraisal);

    dispatch(itemsRequest());

    return requestItems(username, poesessid, tabIds, league)
      .then(response => {
        dispatchTabsResponse(dispatch)(response);

        const updatedAppraisal = appraisalSchema.update(appraisal);
        dispatch(updateAppraisal(updatedAppraisal));
      })
      .catch(err => dispatch(itemsFailure(err)));
  }
);

export const fetchPrices = () => (
  dispatch => {
    dispatch(pricesRequest());

    requestPrices()
      .then(({ data }) => dispatch(pricesSuccess(data)))
      .catch(a => dispatch(pricesFailure()));
  }
);

export const changeLeague = league => (
  (dispatch, getState) => {
    const state = getState();

    const tabs = selectors.leagueTabs(state, league);

    if (tabs.length === 0) {
      const username = selectors.username(state);
      const poesessid = selectors.poesessid(state);

      requestTabs(username, poesessid, league)
        .then(dispatchTabsResponse(dispatch));
    }

    dispatch(setLeague(league));
  }
);
