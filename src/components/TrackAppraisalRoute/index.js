import React, { Component } from 'react';
import { descend, prop, sort } from 'ramda';

import ItemTable from '../ItemTable';
import ItemTableHeader from './ItemTableHeader';
import withState from '../../state/withState';

const connections = {
  actions: ['fetchAppraisalItems'],
  selectors: ['appraisalById', 'appraisedStacks', 'routeAppraisalId'],
};

class TrackAppraisalRoute extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      appraisalById,
      appraisedStacks,
      fetchAppraisalItems,
      routeAppraisalId,
    } = this.props;

    const { items, total } = appraisedStacks('Standard', routeAppraisalId);
    const appraisal = appraisalById(routeAppraisalId);
    const sortedItems = sort(descend(prop('value')), items);


    return (
      <div>
        <ItemTableHeader
          appraisal={appraisal}
          total={total}
        />
        <ItemTable
          appraisal={appraisal}
          items={sortedItems}
          total={total}
        />
        <button onClick={() => fetchAppraisalItems(routeAppraisalId) }>hi</button>
      </div>
    )
  }
}

export default withState(connections)(TrackAppraisalRoute);
