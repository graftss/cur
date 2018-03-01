import React from 'react';
import Timeago from 'react-timeago';
import { Card } from 'semantic-ui-react';

import Link from '../Link';

const lastUpdatedSpan = lastUpdated => (
  lastUpdated === undefined ?
    <span>never updated</span> :
    <span>last updated <Timeago date={lastUpdated} /></span>
);

const timeInfo = (createdOn, lastUpdated) => console.log({createdOn, lastUpdated}) || (
  <div>
    created <Timeago date={createdOn} /><br />
    {lastUpdatedSpan(lastUpdated)}
  </div>
);

export default ({
  createdOn,
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
        <Link onClick={onEditClick}> edit </Link>
        <Link onClick={onTrackClick}> track </Link>
        <Link onClick={onDeleteClick}> delete </Link>
      </div>
    }
    header={name}
    meta={timeInfo(createdOn, lastUpdated)}
  />
);
