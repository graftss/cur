import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import NewLogModal from './NewLogModal';
import { logSchema } from '../../state/schema/log';
import withState from '../../state/withState';

const connections = {
  actions: ['createLog'],
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

  render() {
    const { allLogs } = this.props;
    const { newLogModalOpen } = this.state;

    return (
      <div>
        <div>
          <Button onClick={this.openNewLogModal}>New log</Button>
        </div>
        <div>
          {
            allLogs.map(a => <div>{JSON.stringify(a)}</div>)
          }
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
