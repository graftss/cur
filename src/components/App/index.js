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
    }
  }

  render() {
    const {
      fetchPrices,
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
              fetchPrices={fetchPrices}
              routerPathname={routerPathname}
              verifyingLogin={loggingIn}
            /> :
            <UnidentifiedApp />
         }
       </ConnectedRouter>
    );
  }
}

export default withState(connections)(App);
