import React from 'react';
import { Card } from 'semantic-ui-react';

import AppraisalCard from './AppraisalCard';
import { appraisalSchema } from '../../state/schema/appraisal';

const { createdOn, id, lastUpdated, name, tabIds } = appraisalSchema;

export default ({
  allAppraisals,
  onDeleteClick,
  onEditClick,
  onTrackClick,
}) => (
  <Card.Group>
    {allAppraisals.map(appraisal => (
      <AppraisalCard
        createdOn={createdOn(appraisal)}
        key={id(appraisal)}
        lastUpdated={lastUpdated(appraisal)}
        name={name(appraisal)}
        onEditClick={() => onEditClick(appraisal)}
        onDeleteClick={() => onDeleteClick(appraisal)}
        onTrackClick={() => onTrackClick(appraisal)}
        tabCount={tabIds(appraisal).length}
      />
    ))}
  </Card.Group>
)
