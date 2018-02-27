import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default ({ history }) => {
  const middleware = applyMiddleware(
    thunk,
    routerMiddleware(history),
    logger,
  );

  return createStore(
    reducer,
    compose(middleware, persistState()),
  );
};
