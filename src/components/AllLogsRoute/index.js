import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import LogList from './LogList';
import NewLogModal from './NewLogModal';
import { logSchema } from '../../state/schema/log';
import withState from '../../state/withState';

const connections = {
  actions: ['createLog', 'push'],
  selectors: ['allLogs'],
};

class TrackLogRoute extends Component {
  constructor() {
    super();

    this.state = { newLogModalOpen: false };
  }

  openNewLogModal = () => this.setState({ newLogModalOpen: true })

  closeNewLogModal = () => this.setState({ newLogModalOpen: false })

  createLog = ({ description, name }) => {
    const newLog = logSchema.new(name, description);
    this.props.createLog(newLog);
  }

  onDeleteLogClick = () => {
    console.log('whoops cant delete yet haha');
  }

  onEditLogClick = () => {
    console.log('whoops cant edit yet haha');
  }

  onTrackLogClick = log => this.props.push(`/log/${logSchema.id(log)}`)

  render() {
    const { allLogs } = this.props;
    const { newLogModalOpen } = this.state;

    return (
      <div>
        <div>
          <Button onClick={this.openNewLogModal}>New log</Button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <LogList
            allLogs={allLogs}
            onDeleteClick={this.onDeleteLogClick}
            onEditClick={this.onEditLogClick}
            onTrackClick={this.onTrackLogClick}
          />
        </div>
        <NewLogModal
          closeModal={this.closeNewLogModal}
          createLog={this.createLog}
          open={newLogModalOpen}
        />
      </div>
    );
  }
}

export default withState(connections)(TrackLogRoute);
