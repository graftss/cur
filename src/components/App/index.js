import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';

import './App.css';
import IdentifiedApp from './IdentifiedApp';
import UnidentifiedApp from './UnidentifiedApp';
import withState from '../../state/withState';

const connections = {
  actions: ['verifyLogin', 'fetchPrices'],
  selectors: ['loggedIn', 'loggingIn', 'routerPathname'],
};

class App extends Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.verifyLogin();
      this.props.fetchPrices();
    }
  }

  render() {
    const {
      history,
      loggedIn,
      loggingIn,
      routerPathname,
    } = this.props;

    return (
      <ConnectedRouter history={history}>
       {
          loggedIn ?
            <IdentifiedApp
              routerPathname={routerPathname}
              verifyingLogin={loggingIn}
            /> :
            <UnidentifiedApp
              routerPathname={routerPathname}
            />
         }
       </ConnectedRouter>
    );
  }
}

export default withState(connections)(App);
