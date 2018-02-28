import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import IconGroup from './IconGroup';

export default ({
  appraisal,
  fetchingItems,
  fetchItems,
  total,
}) => (
  <Header>
    {`${appraisal.name} - ${total.value}c`}
    <IconGroup
      fetchingItems={fetchingItems}
      onUpdateClick={fetchItems}
    />
  </Header>
);
