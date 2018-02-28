import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import './ItemTable.css';
import Popup from '../Popup';
import { itemSchema } from '../../state/schema/item';

const { icon, name, quantity, value } = itemSchema;

const itemToJSX = item => (
  <Grid.Column key={item.typeLine}>
    <Popup content={`${name(item)} - ${value(item)}c`}>
      <Image src={icon(item)} />
    </Popup>
    <span style={{ float: 'left' }}>
      x{quantity(item)}
    </span>
  </Grid.Column>
);

export default ({
  appraisal,
  items,
  total,
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
