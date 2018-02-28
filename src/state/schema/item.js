import { prop } from 'ramda';

export const itemSchema = {
  name: prop('typeLine'),
  quantity: prop('stackSize'),
  icon: prop('icon'),
  value: prop('value'),
};
