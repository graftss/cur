import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import createStore from './state/store';

const history = createBrowserHistory();
const store = createStore({ history });

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
