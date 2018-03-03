import React from 'react';
import { Header } from 'semantic-ui-react';

import IconGroup from './IconGroup';

export default ({
  addToLog,
  appraisal,
  fetchingItems,
  fetchItems,
  totalValue,
}) => (
  <Header>
    {`${appraisal.name} - ${totalValue}c (${appraisal.league})`}
    <IconGroup
      fetchingItems={fetchingItems}
      onLogClick={addToLog}
      onUpdateClick={fetchItems}
    />
  </Header>
);
