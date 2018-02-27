import React, { Component } from 'react';
import { assoc, filter } from 'ramda';

import NewAppraisalRouteComponent from './NewAppraisalRouteComponent';
import { newAppraisal } from '../../state/schema/appraisal';
import withState from '../../state/withState';

const connections = {
  actions: ['createAppraisal', 'push'],
  selectors: ['allTabs'],
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
    const appraisal = newAppraisal(this.state.name, this.selectedTabIds());
    this.props.createAppraisal(appraisal);
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
      <NewAppraisalRouteComponent
        allTabs={allTabs}
        appraisalName={name}
        canSubmitAppraisal={this.canSubmit()}
        isIdSelected={id => !!selectedIds[id]}
        onAppraisalSubmit={this.onAppraisalSubmit}
        onAppraisalNameChange={this.onNameChange}
        onItemClick={this.onItemClick}
      />
    );
  }
}

export default withState(connections)(NewAppraisalRouteContainer);
