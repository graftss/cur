import React from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';

import Navbar from '../Navbar';
import NewAppraisalRoute from '../NewAppraisalRoute';

export default () => (
  <div className="App">
    <Navbar />
    <div className="App-content">
      <Container textAlign="center">
        <Route path="/new" component={NewAppraisalRoute} />
      </Container>
    </div>
  </div>
);
