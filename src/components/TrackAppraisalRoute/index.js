import React, { Component } from 'react';

import ItemTable from '../ItemTable';
import withState from '../../state/withState';

const connections = {
  actions: ['fetchAppraisalItems'],
  selectors: ['combinedItemStacks', 'routeAppraisalId'],
};

class TrackAppraisalRoute extends Component {
  render() {
    const {
      combinedItemStacks,
      fetchAppraisalItems,
      routeAppraisalId,
    } = this.props;

    return (
      <div>
        tracking
        <ItemTable
          items={combinedItemStacks(routeAppraisalId)}
        />
        <button onClick={() => fetchAppraisalItems(routeAppraisalId) }>hi</button>
      </div>
    )
  }
}

export default withState(connections)(TrackAppraisalRoute);
