import React, { Component } from 'react';
import { Route } from 'react-router';

import Navbar from '../Navbar';
import NewAppraisalRoute from '../NewAppraisalRoute';

export default class IdentifiedApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-content">
          <Route path="/new" component={NewAppraisalRoute} />
        </div>
      </div>
    );
  }
}
