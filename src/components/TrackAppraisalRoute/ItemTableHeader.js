import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import IconGroup from './IconGroup';

export default ({
  appraisal,
  fetchingItems,
  fetchItems,
  totalValue,
}) => (
  <Header>
    {`${appraisal.name} - ${totalValue}c`}
    <IconGroup
      fetchingItems={fetchingItems}
      onUpdateClick={fetchItems}
    />
  </Header>
);
