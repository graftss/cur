import React from 'react';
import { List, Segment } from 'semantic-ui-react';

import TabListItem from './TabListItem';

export default ({
  allTabs,
  isIdSelected,
  onItemClick,
}) => (
  <div>
    <Segment style={{ width: '250px', margin: '0 auto' }}>
      <List>
        {allTabs.map(tab => (
          <TabListItem
            key={tab.id}
            onClick={onItemClick}
            selected={isIdSelected(tab.id)}
            tab={tab}
          />
        ))}
      </List>
    </Segment>
  </div>
);
