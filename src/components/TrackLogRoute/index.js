import React, { Component } from 'react';

import withState from '../../state/withState';

const connections = {
  selectors: [],
};

class TrackLogRoute extends Component {
  render() {
    console.log(this.props.location);

    return (
      <div>
        hello
      </div>
    );
  }
}

export default withState(connections)(TrackLogRoute);
