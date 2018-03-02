import { last, prop } from 'ramda';

import { getTime, uuid } from '../../utils';

export const logSchema = {
  new: (name, description) => ({
    batches: [],
    createdOn: getTime(),
    description,
    id: uuid(),
    name,
  }),

  newBatch: items => ({
    addedOn: getTime(),
    id: uuid(),
    items,
  }),

  addBatch: (log, items) => ({
    ...log,
    batches: [...log.batches, logSchema.newBatch(items)],
  }),

  lastUpdated: ({ batches }) => batches.length ? last(batches).addedOn : undefined,

  batches: prop('batches'),
  createdOn: prop('createdOn'),
  description: prop('description'),
  id: prop('id'),
  name: prop('name'),
};
