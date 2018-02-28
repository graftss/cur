import React from 'react';
import { Icon } from 'semantic-ui-react';

import Popup from '../Popup';

const UpdateIcon = ({ fetching, onClick }) => (
  <span>
    <Popup content="Update">
      <Icon link name="refresh" loading={fetching} onClick={onClick} />
    </Popup>
  </span>
);

export default ({
  fetchingItems,
  onUpdateClick,
}) => (
  <div style={{ float: 'right' }}>
    <UpdateIcon fetching={fetchingItems} onClick={onUpdateClick} />
  </div>
);
