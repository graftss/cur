import React, { Component } from 'react';

import withState from '../../state/withState';

const connections = {
  selectors: ['routerPathname'],
};

class TrackAppraisalRoute extends Component {
  render() {
    console.log('router pathname', this.props.routerPathname);

    return (
      <div>
        tracking
      </div>
    )
  }
}

export default withState(connections)(TrackAppraisalRoute);
