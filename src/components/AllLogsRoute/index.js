import React, { Component } from 'react';

import withState from '../../state/withState';

const connections = {
  selectors: [],
};

class AllLogsRoute extends Component {
  render() {
    return (
      <div>
        all logs
      </div>
    );
  }
}

export default withState(connections)(AllLogsRoute);
