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

const LogIcon = ({ onClick }) => (
  <span>
    <Popup content="Log">
      <Icon name="tags" onClick={onClick} link={true} />
    </Popup>
  </span>
);

export default ({
  fetchingItems,
  onLogClick,
  onUpdateClick,
}) => (
  <div style={{ float: 'right' }}>
    <LogIcon onClick={onLogClick} />
    <UpdateIcon fetching={fetchingItems} onClick={onUpdateClick} />
  </div>
);
