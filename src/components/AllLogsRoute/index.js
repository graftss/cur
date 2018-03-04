import React, { Component } from 'react';

import DeleteLogModal from './DeleteLogModal';
import LogList from './LogList';
import { logSchema } from '../../state/schema/log';
import withState from '../../state/withState';

const connections = {
  actions: ['deleteLog', 'push'],
  selectors: ['allLogs', 'currentLeague'],
};

class TrackLogRoute extends Component {
  constructor() {
    super();

    this.state = {
      deleteModalOpen: false,
      deletingLog: undefined,
    };
  }

  closeDeleteModal = () => this.setState({ deleteModalOpen: false })

  onDeleteLogClick = log => {
    this.setState({
      deleteModalOpen: true,
      deletingLog: log,
    });
  }

  deleteLog = () => {
    this.props.deleteLog(logSchema.id(this.state.deletingLog));
  }

  onEditLogClick = log => this.props.push(`/editlog/${logSchema.id(log)}`)

  onTrackLogClick = log => this.props.push(`/log/${logSchema.id(log)}`)

  getVisibleLogs = () => {
    const { allLogs, currentLeague } = this.props;

    return allLogs.filter(l => l.league === currentLeague);
  }

  render() {
    const { deleteModalOpen, deletingLog } = this.state;

    return (
      <div>
        <div style={{ marginTop: '20px' }}>
          <LogList
            allLogs={this.getVisibleLogs()}
            onDeleteClick={this.onDeleteLogClick}
            onEditClick={this.onEditLogClick}
            onTrackClick={this.onTrackLogClick}
          />
        </div>
        <DeleteLogModal
          closeModal={this.closeDeleteModal}
          deleteLog={this.deleteLog}
          open={deleteModalOpen}
          name={logSchema.name(deletingLog)}
        />
      </div>
    );
  }
}

export default withState(connections)(TrackLogRoute);
