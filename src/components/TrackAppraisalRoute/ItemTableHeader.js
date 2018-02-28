import React from 'react';
import { Header } from 'semantic-ui-react';

export default ({
  appraisal,
  total,
}) => (
  <Header>
    {`${appraisal.name} - ${total.value}c`}
  </Header>
);
