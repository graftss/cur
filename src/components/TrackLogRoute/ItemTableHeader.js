import React from 'react';
import { Header } from 'semantic-ui-react';

export default ({
  league,
  name,
  totalValue,
}) => (
  <Header>
    {`${name} - ${totalValue}c (${league})`}
  </Header>
);
