import { argCreator, keyMirror } from '../../utils';

export const TYPES = keyMirror([
  'LOG_CREATE',
  'LOG_DELETE',
  'LOG_UPDATE',
  'LOG_ADD_BATCH',
  'LOG_REMOVE_BATCH',
]);

export const createLog = argCreator(TYPES.LOG_CREATE, ['log']);
export const deleteLog = argCreator(TYPES.LOG_DELETE, ['id']);
export const updateLog = argCreator(TYPES.LOG_UPDATE, ['log']);

export const addLogBatch = argCreator(TYPES.LOG_ADD_BATCH, ['logId', 'items']);
export const removeLogBatch = argCreator(TYPES.LOG_REMOVE_BATCH, ['logId', 'batchId']);
