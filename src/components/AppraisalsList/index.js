import React from 'react';
import { Card } from 'semantic-ui-react';

import AppraisalCard from './AppraisalCard';
import { appraisalSchema } from '../../state/schema/appraisal';

const { id, lastUpdated, name, tabIds } = appraisalSchema;

export default ({
  allAppraisals,
}) => (
  <Card.Group>
    {allAppraisals.map(appraisal => (
      <AppraisalCard
        key={id(appraisal)}
        lastUpdated={lastUpdated(appraisal)}
        name={name(appraisal)}
        tabCount={tabIds(appraisal).length}
      />
    ))}
  </Card.Group>
)
