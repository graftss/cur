import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import './ItemTable.css';
import Popup from '../Popup';

const itemToJSX = item => (
  <Grid.Column key={item.name}>
    <Popup content={`${item.name} @ ${item.value}c - ${item.totalValue}c`}>
      <Image src={item.iconUrl} />
    </Popup>
    <span style={{ float: 'left' }}>
      x{item.quantity}
    </span>
  </Grid.Column>
);

export default ({
  appraisal,
  items,
}) => (
  <div>
    <Grid
      className="item-grid"
      columns={10}
      padded
    >
      {items.map(itemToJSX)}
    </Grid>
  </div>
);
