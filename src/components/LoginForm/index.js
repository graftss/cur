import React, { Component } from 'react';

import withState from '../../state/withState';
import LoginFormComponent from './LoginFormComponent';

const connection = {
  actions: ['login'],
  selectors: ['loggedIn', 'loggingIn', 'loginError'],
};

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poesessid: '',
      username: '',
    };
  }

  onUsernameChange = e => this.setState({ username: e.target.value })

  onPoesessidChange = e => this.setState({ poesessid: e.target.value })

  onSubmit = () => {
    const { poesessid, username } = this.state;

    this.props.login(username, poesessid);
  }

  render() {
    const { poesessid, username } = this.state;
    const { loginError, loggingIn } = this.props;

    return (
      <LoginFormComponent
        error={loginError}
        loading={loggingIn}
        onUsernameChange={this.onUsernameChange}
        onPoesessidChange={this.onPoesessidChange}
        onSubmit={this.onSubmit}
        poesessid={poesessid}
        username={username}
      />
    );
  }
}

export default withState(connection)(LoginFormContainer);
