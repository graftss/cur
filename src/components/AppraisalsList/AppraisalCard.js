import React from 'react';
import { Card } from 'semantic-ui-react';

import Link from '../Link';

export default ({
  onDeleteClick,
  name,
  tabCount,
}) => (
  <Card
    description="description"
    extra="extra"
    header={name}
    meta={
      <div>
        <Link onClick={onDeleteClick}> delete </Link>
      </div>
    }
  />
);
