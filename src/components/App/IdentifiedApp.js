import React, { Component } from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';

import AllAppraisalsRoute from '../AllAppraisalsRoute';
import Navbar from '../Navbar';
import NewAppraisalRoute from '../NewAppraisalRoute';
import TrackAppraisalRoute from '../TrackAppraisalRoute';

export default class IdentifiedApp extends Component{
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-content">
          <Container textAlign="center">
            <Route path="/new" component={NewAppraisalRoute} />
            <Route path="/all" component={AllAppraisalsRoute} />
            <Route path="/track/:id" component={TrackAppraisalRoute} />
          </Container>
        </div>
      </div>
    );
  }
}
