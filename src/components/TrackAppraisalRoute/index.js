import React, { Component } from 'react';
import { descend, prop, sort } from 'ramda';

import ItemTable from '../ItemTable';
import ItemTableHeader from './ItemTableHeader';
import withState from '../../state/withState';

const connections = {
  actions: ['fetchAppraisalItems'],
  selectors: [
    'appraisalById',
    'appraisedItems',
    'fetchingItems',
    'trackedAppraisalId',
  ],
};

class TrackAppraisalRoute extends Component {
  addToLog = () => {
    console.log('howdy')
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
      trackedAppraisalId,
    } = this.props;

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
      </div>
    )
  }
}

export default withState(connections)(TrackAppraisalRoute);
