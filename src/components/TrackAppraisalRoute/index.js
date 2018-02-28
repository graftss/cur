import React, { Component } from 'react';

import ItemTable from '../ItemTable';
import withState from '../../state/withState';

const connections = {
  actions: ['fetchAppraisalItems'],
  selectors: ['routeAppraisalId'],
};

class TrackAppraisalRoute extends Component {
  render() {
    return (
      <div>
        tracking
        <ItemTable />
        <button onClick={() => this.props.fetchAppraisalItems(this.props.routeAppraisalId) }>hi</button>
      </div>
    )
  }
}

export default withState(connections)(TrackAppraisalRoute);
