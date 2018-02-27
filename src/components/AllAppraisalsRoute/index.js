import React from 'react';

import AppraisalsList from '../AppraisalsList';
import withState from '../../state/withState';

const connections = {
  selectors: ['allAppraisals'],
};

const AllAppraisalsRoute = ({
  allAppraisals,
}) => (
  <div>
    <AppraisalsList
      allAppraisals={allAppraisals}
    />
  </div>
);

export default withState(connections)(AllAppraisalsRoute);
