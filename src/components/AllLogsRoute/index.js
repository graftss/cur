import React, { Component } from 'react';

import LogList from './LogList';
import { logSchema } from '../../state/schema/log';
import withState from '../../state/withState';

const connections = {
  actions: ['push'],
  selectors: ['allLogs'],
};

class TrackLogRoute extends Component {
  onDeleteLogClick = () => {
    console.log('whoops cant delete yet haha');
  }

  onEditLogClick = () => {
    console.log('whoops cant edit yet haha');
  }

  onTrackLogClick = log => this.props.push(`/log/${logSchema.id(log)}`)

  render() {
    const { allLogs } = this.props;

    return (
      <div>
        <div style={{ marginTop: '20px' }}>
          <LogList
            allLogs={allLogs}
            onDeleteClick={this.onDeleteLogClick}
            onEditClick={this.onEditLogClick}
            onTrackClick={this.onTrackLogClick}
          />
        </div>
      </div>
    );
  }
}

export default withState(connections)(TrackLogRoute);
