import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

import withState from '../../state/withState';

const connections = {
  selectors: ['allLogs'],
};

class TrackLogRoute extends Component {
  constructor() {
    super();

    this.state = { newLogName: '' };
  }

  createLog = () => {

  }

  render() {
    const { allLogs } = this.props;
    const { newLogName } = this.state;

    return (
      <div>
        <div>
          <Input
            onChange={this.onNewLogNameChange}
            type="text"
            value={newLogName}
          />
        </div>
        <div>
          {
            allLogs.map(a => <div>JSON.stringify(a)</div>)
          }
        </div>
      </div>
    );
  }
}

export default withState(connections)(TrackLogRoute);
