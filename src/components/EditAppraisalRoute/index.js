import React, { Component } from 'react';
import { assoc, filter, reduce } from 'ramda';

import AppraisalFormComponent from '../AppraisalFormComponent';
import { editAppraisal } from '../../state/schema/appraisal';
import withState from '../../state/withState';

const connections = {
  actions: ['updateAppraisal', 'fetchAppraisalItems', 'push'],
  selectors: ['allTabs', 'editingAppraisal'],
};

class NewAppraisalRouteContainer extends Component {
  componentWillMount() {
    const { editingAppraisal } = this.props;

    this.setState({
      name: editingAppraisal.name,
      selectedIds: reduce(
        (acc, tabId) => assoc(tabId, true, acc),
        {},
        editingAppraisal.tabIds,
      ),
    });
  }

  onItemClick = tab => {
    const { id } = tab;
    const { selectedIds } = this.state;

    this.setState({
      selectedIds: assoc(id, !selectedIds[id], selectedIds),
    });
  }

  selectedTabIds = () => Object.keys(filter(a => a, this.state.selectedIds))

  onAppraisalSubmit = () => {
    const { editingAppraisal } = this.props

    const editedAppraisal = editAppraisal(
      editingAppraisal,
      this.state.name,
      this.selectedTabIds(),
    );

    this.props.updateAppraisal(editedAppraisal);
    this.props.push('/all');
  }

  canSubmit = () => {
    return this.state.name.length && this.selectedTabIds().length;
  }

  onNameChange = e => this.setState({ name: e.target.value })

  render() {
    const { allTabs } = this.props;
    const { name, selectedIds } = this.state;

    return (
      <AppraisalFormComponent
        allTabs={allTabs}
        appraisalName={name}
        canSubmitAppraisal={this.canSubmit()}
        isIdSelected={id => !!selectedIds[id]}
        onAppraisalSubmit={this.onAppraisalSubmit}
        onAppraisalNameChange={this.onNameChange}
        onItemClick={this.onItemClick}
        submitPrompt="Edit"
      />
    );
  }
}

export default withState(connections)(NewAppraisalRouteContainer);
