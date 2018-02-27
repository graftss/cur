import React, { Component } from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import IdentifiedApp from './IdentifiedApp';
import UnidentifiedApp from './UnidentifiedApp';
import withState from '../../state/withState';

const connections = {
  actions: ['verifyLogin'],
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
      loggedIn,
      loggingIn,
      routerPathname,
    } = this.props;

    return (
      loggedIn ?
        <IdentifiedApp
          verifyingLogin={loggingIn}
        /> :
        <UnidentifiedApp
          routerPathname={routerPathname}
        />
    );
  }
}

export default withState(connections)(App);
