import React, { Component } from 'react';

import ItemTable from '../ItemTable';
import withState from '../../state/withState';

const connections = {
  actions: ['fetchAppraisalItems'],
  selectors: ['appraisalItems', 'routeAppraisalId'],
};

class TrackAppraisalRoute extends Component {
  render() {
    const {
      appraisalItems,
      fetchAppraisalItems,
      routeAppraisalId,
    } = this.props;

    return (
      <div>
        tracking
        <ItemTable
          items={appraisalItems(routeAppraisalId)}
        />
        <button onClick={() => fetchAppraisalItems(routeAppraisalId) }>hi</button>
      </div>
    )
  }
}

export default withState(connections)(TrackAppraisalRoute);
