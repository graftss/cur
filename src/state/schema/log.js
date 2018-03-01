import { getTime, uuid } from '../../utils';

export const logSchema = {
  new: name => ({
    batches: [],
    createdOn: getTime(),
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
};
