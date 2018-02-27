import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';

import withState from '../../state/withState';

const connections = {
  actions: ['push'],
  selectors: ['routerPathname'],
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
      />
    )
  }

  render() {
    const { push, routerPathname } = this.props;

    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item>
            <b>Cur</b>
          </Menu.Item>
          {this.menuLink('Track', '/track')}
          {this.menuLink('New', '/new')}
        </Container>
      </Menu>
    );
  }
}


export default withState(connections)(Navbar);
