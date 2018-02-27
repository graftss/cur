import React from 'react';
import { Card } from 'semantic-ui-react';

import Link from '../Link';

export default ({
  lastUpdated,
  onDeleteClick,
  name,
  tabCount,
}) => (
  <Card
    description={`tracking ${tabCount} tabs`}
    extra={
      <div>
        <Link onClick={onDeleteClick}> delete </Link>
      </div>
    }
    header={name}
    meta={`last updated ${lastUpdated}`}
  />
);
