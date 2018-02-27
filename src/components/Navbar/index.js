import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

import withState from '../../state/withState';

const connections = {
  actions: ['push'],
  selectors: ['routerPathname', 'username', 'loggingIn'],
};

class Navbar extends Component {
  menuLink(label, link) {
    const { push, routerPathname } = this.props;

    return (
      <Menu.Item
        active={routerPathname === link}
        content={label}
        link
        onClick={() => push(link)}
        position="right"
      />
    )
  }

  loginStateItem() {
    const { username, loggingIn } = this.props;

    return (
      <Menu.Item>
        {
          loggingIn ?
            <span>Logging in...</span> :
            <span>Logged in as <b>{username}</b></span>
        }
      </Menu.Item>
    )

  }

  render() {
    const { username } = this.props;

    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item>
            <b>Cur</b>
          </Menu.Item>
          {this.loginStateItem()}

          <Menu.Menu position="right">
            {this.menuLink('Track', '/track')}
            {this.menuLink('New', '/new')}
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}


export default withState(connections)(Navbar);
