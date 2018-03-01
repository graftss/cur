import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

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

  onEditClick = appraisal => this.props.push(`/edit/${appraisal.id}`)

  onTrackClick = appraisal => this.props.push(`/track/${appraisal.id}`)

  renderAppraisalList() {
    const { allAppraisals, push } = this.props;

    return allAppraisals.length === 0 ?
      <Button onClick={() => push('/new')}>Create an appraisal</Button> :
      <AppraisalsList
        allAppraisals={allAppraisals}
        onDeleteClick={this.openDeleteModal}
        onEditClick={this.onEditClick}
        onTrackClick={this.onTrackClick}
      />
  }

  render() {
    const { allAppraisals } = this.props;

    return (
      <div>
        {this.renderAppraisalList()}
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
