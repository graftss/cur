import React, { Component } from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
