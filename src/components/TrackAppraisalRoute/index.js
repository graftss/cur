import React, { Component } from 'react';
import { descend, prop, sort } from 'ramda';

import AddBatchModal from './AddBatchModal';
import ItemTable from '../ItemTable';
import ItemTableHeader from './ItemTableHeader';
import withState from '../../state/withState';

const connections = {
  actions: ['addLogBatch', 'fetchAppraisalItems'],
  selectors: [
    'logDropdownOptions',
    'appraisalById',
    'appraisedItems',
    'fetchingItems',
    'trackedAppraisalId',
  ],
};

class TrackAppraisalRoute extends Component {
  constructor() {
    super();

    this.state = { addBatchModalOpen: false };
  }

  openAddBatchModal = () => this.setState({ addBatchModalOpen: true })

  closeAddBatchModal = () => this.setState({ addBatchModalOpen: false })

  addToLog = () => {
    this.openAddBatchModal();
  }

  fetchAppraisalItems = () => {
    const { fetchAppraisalItems, trackedAppraisalId } = this.props;
    fetchAppraisalItems(trackedAppraisalId);
  }

  render() {
    const {
      appraisalById,
      appraisedItems,
      fetchingItems,
      logDropdownOptions,
      trackedAppraisalId,
    } = this.props;
    const { addBatchModalOpen } = this.state;

    const { items, totalValue } = appraisedItems;

    // default to `{}` here so that it's not `undefined` on browser back
    const appraisal = appraisalById(trackedAppraisalId) || {};
    const sortedItems = sort(descend(prop('value')), items);

    return (
      <div>
        <ItemTableHeader
          appraisal={appraisal}
          addToLog={this.addToLog}
          fetchingItems={fetchingItems}
          fetchItems={this.fetchAppraisalItems}
          totalValue={totalValue}
        />
        <ItemTable
          appraisal={appraisal}
          items={sortedItems}
        />
        <AddBatchModal
          closeModal={this.closeAddBatchModal}
          logDropdownOptions={logDropdownOptions}
          open={addBatchModalOpen}
        />
      </div>
    )
  }
}

export default withState(connections)(TrackAppraisalRoute);
