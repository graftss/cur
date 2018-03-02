import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

import withState from '../../state/withState';

const connections = {
  selectors: ['trackedLog'],
};

class TrackLogRoute extends Component {
  render() {
    const { trackedLog } = this.props;

    console.log('tracked log', trackedLog);

    return (
      <div>
        <div>
        </div>
      </div>
    );
  }
}

export default withState(connections)(TrackLogRoute);
