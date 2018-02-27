import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import tabs from './tabs/reducer';
import user from './user/reducer';

export default combineReducers({
  router: routerReducer,
  tabs,
  user,
});
