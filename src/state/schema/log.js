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
};
