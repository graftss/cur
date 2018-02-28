import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import LoginRoute from '../LoginRoute';

const loginPath = '/login';

export default () => (
  <div className="App">
    <Switch>
      <Route path="/login" component={LoginRoute} />
      <Route path="*" render={() => <Redirect to={{ pathname: loginPath }} />} />
    </Switch>
  </div>
);

