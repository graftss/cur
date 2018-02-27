import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginRoute from '../LoginRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={LoginRoute} />
      </div>
    );
  }
}

export default App;
