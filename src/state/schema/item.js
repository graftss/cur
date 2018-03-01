import { prop } from 'ramda';

export const itemSchema = {
  name: prop('typeLine'),
  quantity: item => item.stackSize || 1,
  icon: prop('icon'),
  value: prop('value'),

  combineStacks: (a, b) => {
    if (!a) return b;
    if (!b) return a;

    return {
      ...a,
      stackSize: itemSchema.quantity(a) + itemSchema.quantity(b),
    };
  }
};
