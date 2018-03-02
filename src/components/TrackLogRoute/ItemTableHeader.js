import React from 'react';
import { Header } from 'semantic-ui-react';

export default ({
  name,
  totalValue,
}) => (
  <Header>
    {`${name} - ${totalValue}c`}
  </Header>
);
