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

const SnapshotIcon = ({ onClick }) => (
  <span>
    <Popup content="Snapshot">
      <Icon name="camera" onClick={onClick} link={true} />
    </Popup>
  </span>
);

export default ({
  fetchingItems,
  onLogClick,
  onSnapshotClick,
  onUpdateClick,
}) => (
  <div style={{ float: 'right' }}>
    <SnapshotIcon onClick={onSnapshotClick} />
    <LogIcon onClick={onLogClick} />
    <UpdateIcon fetching={fetchingItems} onClick={onUpdateClick} />
  </div>
);
