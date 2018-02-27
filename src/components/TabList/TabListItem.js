import React from 'react';
import { List } from 'semantic-ui-react';

import './TabListItem.css';

const hex = n => n.toString(16).padStart(2).replace(' ', '0');
const colorToHex = ({ r, g, b }) => `#${hex(r)}${hex(g)}${hex(b)}`

const classString = (selected) => [
  'TabListItem',
  selected ? 'selected' : ''
].join(' ');

export default ({ onClick, selected, tab }) => (
  <List.Item
    className={classString(selected)}
    style={{ backgroundColor: colorToHex(tab.color) }}
    onClick={() => onClick(tab)}
  >
    {tab.name}
  </List.Item>
);
