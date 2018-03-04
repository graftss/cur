import { argCreator, keyMirror } from '../../utils';

export const TYPES = keyMirror([
  'APPRAISALS_CREATE',
  'APPRAISALS_DELETE',
  'APPRAISALS_UPDATE',
  'APPRAISALS_SNAPSHOT',
]);

export const createAppraisal = argCreator(TYPES.APPRAISALS_CREATE, ['appraisal']);

export const deleteAppraisal = argCreator(TYPES.APPRAISALS_DELETE, ['id']);

export const updateAppraisal = argCreator(TYPES.APPRAISALS_UPDATE, ['appraisal']);

export const addAppraisalSnapshot = argCreator(
  TYPES.APPRAISALS_SNAPSHOT,
  ['id', 'snapshot'],
);
