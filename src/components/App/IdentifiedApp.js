import React from 'react';
import { Route } from 'react-router';

import Navbar from '../Navbar';
import NewAppraisalRoute from '../NewAppraisalRoute';

export default () => (
  <div className="App">
    <Navbar />
    <div className="App-content">
      <Route path="/new" component={NewAppraisalRoute} />
    </div>
  </div>
);
