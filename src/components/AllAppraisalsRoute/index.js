import React, { Component } from 'react';

import DeleteAppraisalModal from './DeleteAppraisalModal';
import AppraisalsList from '../AppraisalsList';
import withState from '../../state/withState';

const connections = {
  actions: ['deleteAppraisal', 'push'],
  selectors: ['allAppraisals'],
};

class AllAppraisalsRoute extends Component {
  constructor() {
    super();

    this.state = {
      deletingAppraisal: undefined,
      showDeleteModal: false,
    };
  }

  openDeleteModal = appraisal => {
    this.setState({ showDeleteModal: true, deletingAppraisal: appraisal });
  }

  closeDeleteModal = () => {
    this.setState({ showDeleteModal: false, deletingAppraisal: undefined });
  }

  confirmDeleteAppraisal = () => {
    this.props.deleteAppraisal(this.state.deletingAppraisal.id);
  }

  trackAppraisal = (appraisal) => this.props.push(`/track/${appraisal.id}`);

  render() {
    const { allAppraisals } = this.props;

    return (
      <div>
        <AppraisalsList
          allAppraisals={allAppraisals}
          onDeleteClick={this.openDeleteModal}
          onTrackClick={this.trackAppraisal}
        />
        <DeleteAppraisalModal
          appraisalName={this.state.deletingAppraisal && this.state.deletingAppraisal.name}
          closeModal={this.closeDeleteModal}
          deleteAppraisal={this.confirmDeleteAppraisal}
          open={this.state.showDeleteModal}
        />
      </div>
    )
  }
}

export default withState(connections)(AllAppraisalsRoute);
