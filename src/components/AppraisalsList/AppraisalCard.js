import React from 'react';
import { Card } from 'semantic-ui-react';

import Link from '../Link';

export default ({
  lastUpdated,
  onDeleteClick,
  onEditClick,
  onTrackClick,
  name,
  tabCount,
}) => (
  <Card
    description={`tracking ${tabCount} tabs`}
    extra={
      <div>
        <Link onClick={onEditClick}> edit(?) </Link>
        <Link onClick={onTrackClick}> track </Link>
        <Link onClick={onDeleteClick}> delete </Link>
      </div>
    }
    header={name}
    meta={`last updated ${lastUpdated}`}
  />
);
