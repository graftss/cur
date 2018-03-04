import React, { Component } from 'react';
import { assoc, filter } from 'ramda';

import AppraisalForm from '../AppraisalForm';
import { newAppraisal } from '../../state/schema/appraisal';
import withState from '../../state/withState';

const connections = {
  actions: ['createAppraisal', 'fetchAppraisalItems', 'push'],
  selectors: ['currentLeague', 'currentLeagueTabs'],
};

class NewAppraisalRouteContainer extends Component {
  constructor() {
    super();

    this.state = {
      selectedIds: {},
      name: '',
    };
  }

  onItemClick = tab => {
    const { id } = tab;
    const { selectedIds } = this.state;

    this.setState({
      selectedIds: assoc(id, !selectedIds[id], selectedIds),
    });
  }

  selectedTabIds = () => (
    Object.keys(filter(a => a, this.state.selectedIds))
  )

  onAppraisalSubmit = () => {
    const { createAppraisal, currentLeague, push } = this.props;

    const appraisal = newAppraisal(
      this.state.name,
      this.selectedTabIds(),
      currentLeague,
    );

    createAppraisal(appraisal);
    push('/all');
  }

  canSubmit = () => {
    return this.state.name.length && this.selectedTabIds().length;
  }

  onNameChange = e => this.setState({ name: e.target.value })

  render() {
    const { currentLeagueTabs } = this.props;
    const { name, selectedIds } = this.state;

    return (
      <AppraisalForm
        appraisalName={name}
        canSubmitAppraisal={this.canSubmit()}
        isIdSelected={id => !!selectedIds[id]}
        onAppraisalSubmit={this.onAppraisalSubmit}
        onAppraisalNameChange={this.onNameChange}
        onItemClick={this.onItemClick}
        submitPrompt="Create"
        tabs={currentLeagueTabs}
      />
    );
  }
}

export default withState(connections)(NewAppraisalRouteContainer);
