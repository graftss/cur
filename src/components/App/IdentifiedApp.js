import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react';

import AllAppraisalsRoute from '../AllAppraisalsRoute';
import Navbar from '../Navbar';
import NewAppraisalRoute from '../NewAppraisalRoute';
import TrackAppraisalRoute from '../TrackAppraisalRoute';

class IdentifiedApp extends Component{
  componentDidMount() {
    this.props.fetchPrices();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-content">
          <Container textAlign="center">
            <Switch>
              <Route path="/new" component={NewAppraisalRoute} />
              <Route path="/all" component={AllAppraisalsRoute} />
              <Route path="/track/:id" component={TrackAppraisalRoute} />
              <Route path="*" render={() => <Redirect to={{ pathname: '/all' }} />} />
            </Switch>
          </Container>
        </div>
      </div>
    );
  }
}

export default IdentifiedApp;
