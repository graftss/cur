import React, { Component } from 'react';

import LoginForm from './LoginForm';

export default class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poesessid: '',
      username: '',
    };
  }

  onUsernameChange = e => this.setState({ username: e.target.value })

  onPoesessidChange = e => this.setState({ poesessid: e.target.value })

  onSubmit = () => console.log('hahaa', this.state)

  render() {
    const { poesessid, username } = this.state;

    return (
      <LoginForm
        onUsernameChange={this.onUsernameChange}
        onPoesessidChange={this.onPoesessidChange}
        onSubmit={this.onSubmit}
        poesessid={poesessid}
        username={username}
      />
    );
  }
}
