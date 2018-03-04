import React, { Component } from 'react';

import AppraisalFormComponent from './AppraisalFormComponent';
import withState from '../../state/withState';

const connections = {};

class AppraisalForm extends Component {
  render() {
    return (
      <AppraisalFormComponent
        {...this.props}
      />
    );
  }
}

export default withState(connections)(AppraisalForm);
