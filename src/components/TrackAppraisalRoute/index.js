import React, { Component } from 'react';
import { descend, prop, sort } from 'ramda';

import ItemTable from '../ItemTable';
import ItemTableHeader from './ItemTableHeader';
import withState from '../../state/withState';

const connections = {
  actions: ['fetchAppraisalItems'],
  selectors: [
    'appraisalById',
    'appraisedStacks',
    'fetchingItems',
    'trackedAppraisalId',
  ],
};

class TrackAppraisalRoute extends Component {
  constructor() {
    super();
  }

  fetchAppraisalItems = () => {
    const { fetchAppraisalItems, trackedAppraisalId } = this.props;
    fetchAppraisalItems(trackedAppraisalId);
  }

  render() {
    const {
      appraisalById,
      appraisedStacks,
      fetchingItems,
      trackedAppraisalId,
    } = this.props;

    const { items, total } = appraisedStacks;

    // default to `{}` here so that it's not `undefined` on browser back
    const appraisal = appraisalById(trackedAppraisalId) || {};
    const sortedItems = sort(descend(prop('value')), items);

    return (
      <div>
        <ItemTableHeader
          appraisal={appraisal}
          fetchingItems={fetchingItems}
          fetchItems={this.fetchAppraisalItems}
          total={total}
        />
        <ItemTable
          appraisal={appraisal}
          items={sortedItems}
          total={total}
        />
      </div>
    )
  }
}

export default withState(connections)(TrackAppraisalRoute);
