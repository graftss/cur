import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import appraisals from './appraisals/reducer';
import tabs from './tabs/reducer';
import user from './user/reducer';

export default combineReducers({
  appraisals,
  router: routerReducer,
  tabs,
  user,
});
