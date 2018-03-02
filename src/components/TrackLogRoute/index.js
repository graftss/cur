import React, { Component } from 'react';

import ItemTable from '../ItemTable';
import ItemTableHeader from './ItemTableHeader';
import { logSchema } from '../../state/schema/log';
import withState from '../../state/withState';

const connections = {
  selectors: ['trackedLog', 'trackedLogAppraisal'],
};

class TrackLogRoute extends Component {
  render() {
    const { trackedLog, trackedLogAppraisal } = this.props;
    const { items, totalValue } = trackedLogAppraisal;

    return (
      <div>
        <ItemTableHeader
          name={logSchema.name(trackedLog)}
          totalValue={totalValue}
        />
        <ItemTable items={items} />
      </div>
    );
  }
}

export default withState(connections)(TrackLogRoute);
