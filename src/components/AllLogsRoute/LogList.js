import React from 'react';
import { Card } from 'semantic-ui-react';

import LogCard from './LogCard';
import { logSchema } from '../../state/schema/log';

const { batches, createdOn, description, lastUpdated, name } = logSchema;

export default ({
  allLogs,
  onDeleteClick,
  onEditClick,
  onTrackClick,
}) => (
  <Card.Group>
    {allLogs.map(log => (
      <LogCard
        batchCount={batches(log).length}
        createdOn={createdOn(log)}
        description={description(log)}
        lastUpdated={lastUpdated(log)}
        onDeleteClick={() => onDeleteClick(log)}
        onEditClick={() => onEditClick(log)}
        onTrackClick={() => onTrackClick(log)}
        name={name(log)}
      />
    ))}
  </Card.Group>
);
