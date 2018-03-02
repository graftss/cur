import React, { Component } from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';

import withState from '../../state/withState';

const connections = {
  actions: ['push'],
  selectors: ['routerPathname', 'username', 'loggingIn'],
};

class Navbar extends Component {
  appraisalDropdownData = [
    { text: 'All', url: '/all' },
    { text: 'New', url: '/new' },
  ];

  logDropdownData = [
    { text: 'All', url: '/logs' },
    { text: 'New', url: '/newlog' },
  ];

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
    );
  }

  logoItem() {
    return (
      <Menu.Item fitted="vertically">
        <h2>Cur</h2>
      </Menu.Item>
    )
  }

  renderDropdown(data, title) {
    return (
      <Menu.Menu position="right">
        <Dropdown item text={title}>
          <Dropdown.Menu>
            {data.map(({ text, url }) => (
              <Dropdown.Item key={text} onClick={() => this.props.push(url)}>
                {text}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <Menu fixed="top">
        <Container>
          {this.logoItem()}
          {this.loginStateItem()}
          <Menu.Menu position="right">
            {this.renderDropdown(this.appraisalDropdownData, 'Appraisals')}
            {this.renderDropdown(this.logDropdownData, 'Logs')}
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}


export default withState(connections)(Navbar);
