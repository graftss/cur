import React from 'react';
import { Card } from 'semantic-ui-react';

import LogCard from './LogCard';
import { logSchema } from '../../state/schema/log';

const { batches, createdOn, description, id, lastUpdated, name } = logSchema;

export default ({
  logs,
  onDeleteClick,
  onEditClick,
  onTrackClick,
}) => (
  <Card.Group>
    {logs.map(log => (
      <LogCard
        batchCount={batches(log).length}
        createdOn={createdOn(log)}
        description={description(log)}
        key={id(log)}
        lastUpdated={lastUpdated(log)}
        onDeleteClick={() => onDeleteClick(log)}
        onEditClick={() => onEditClick(log)}
        onTrackClick={() => onTrackClick(log)}
        name={name(log)}
      />
    ))}
  </Card.Group>
);
