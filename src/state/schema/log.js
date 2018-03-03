import { last, prop } from 'ramda';

import { getTime, uuid } from '../../utils';

export const logSchema = {
  new: (name, description, league) => ({
    batches: [],
    createdOn: getTime(),
    description,
    id: uuid(),
    league,
    name,
  }),

  edit: (log, name, description) => ({
    ...log,
    name,
    description,
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
  league: prop('league'),
  name: prop('name'),
};
