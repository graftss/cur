import React, { Component } from 'react';

import AppraisalsList from '../AppraisalsList';
import withState from '../../state/withState';

const connections = {
  actions: ['deleteAppraisal'],
  selectors: ['allAppraisals'],
};

class AllAppraisalsRoute extends Component {
  onDeleteClick = id => {
    this.props.deleteAppraisal(id);
  }

  render() {
    const { allAppraisals } = this.props;

    return (
      <div>
        <AppraisalsList
          allAppraisals={allAppraisals}
          onDeleteClick={this.onDeleteClick}
        />
      </div>
    )
  }
}

export default withState(connections)(AllAppraisalsRoute);
