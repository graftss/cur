import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import user from './user/reducer';

export default combineReducers({
  router: routerReducer,
  user,
});
