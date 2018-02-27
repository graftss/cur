import React from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import IdentifiedApp from './IdentifiedApp';
import UnidentifiedApp from './UnidentifiedApp';
import withState from '../../state/withState';

const connections = {
  selectors: ['loggedIn', 'routerPathname'],
};

const App = ({
  loggedIn,
  routerPathname,
}) => (
  loggedIn ?
    <IdentifiedApp /> :
    <UnidentifiedApp routerPathname={routerPathname} />
);

export default withState(connections)(App);
