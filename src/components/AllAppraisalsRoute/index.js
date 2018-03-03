import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import DeleteAppraisalModal from './DeleteAppraisalModal';
import AppraisalsList from '../AppraisalsList';
import withState from '../../state/withState';

const connections = {
  actions: ['deleteAppraisal', 'push'],
  selectors: ['allAppraisals', 'currentLeague'],
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

  getVisibleAppraisals = () => {
    const { allAppraisals, currentLeague } = this.props;

    return allAppraisals.filter(a => a.league === currentLeague);
  }

  renderAppraisalList() {
    const { allAppraisals, push } = this.props;

    return allAppraisals.length === 0 ?
      <Button onClick={() => push('/new')}>Create an appraisal</Button> :
      <AppraisalsList
        allAppraisals={this.getVisibleAppraisals()}
        onDeleteClick={this.openDeleteModal}
        onEditClick={this.onEditClick}
        onTrackClick={this.onTrackClick}
      />
  }

  render() {
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
