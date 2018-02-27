import React from 'react';
import { Redirect, Route } from 'react-router';

import LoginRoute from '../LoginRoute';

const loginPath = '/login';

export default ({
  routerPathname,
}) => (
  <div className="App">
    {
      routerPathname === loginPath ?
        <Route path={loginPath} component={LoginRoute} /> :
        <Redirect to={{ pathname: loginPath }} />
    }
  </div>
);
