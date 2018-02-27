import React from 'react';
import { Card } from 'semantic-ui-react';

export default ({
  name,
  tabCount,
}) => (
  <Card
    description="description"
    extra="extra"
    header={name}
    meta={`tracking ${tabCount} tabs`}
  />
);
