import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import appraisals from './appraisals/reducer';
import items from './items/reducer';
import tabs from './tabs/reducer';
import user from './user/reducer';

export default combineReducers({
  appraisals,
  items,
  router: routerReducer,
  tabs,
  user,
});
