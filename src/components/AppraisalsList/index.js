import React from 'react';
import { Card } from 'semantic-ui-react';

import AppraisalCard from './AppraisalCard';
import { appraisalSchema } from '../../state/schema/appraisal';

const { id, lastUpdated, name, tabIds } = appraisalSchema;

export default ({
  allAppraisals,
  onDeleteClick,
}) => (
  <Card.Group>
    {allAppraisals.map(appraisal => (
      <AppraisalCard
        key={id(appraisal)}
        lastUpdated={lastUpdated(appraisal)}
        name={name(appraisal)}
        onDeleteClick={() => onDeleteClick(id(appraisal))}
        tabCount={tabIds(appraisal).length}
      />
    ))}
  </Card.Group>
)
