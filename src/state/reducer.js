import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import appraisals from './appraisals/reducer';
import items from './items/reducer';
import league from './league/reducer';
import logs from './logs/reducer';
import prices from './prices/reducer';
import tabs from './tabs/reducer';
import user from './user/reducer';

export default combineReducers({
  appraisals,
  items,
  league,
  logs,
  prices,
  router: routerReducer,
  tabs,
  user,
});
