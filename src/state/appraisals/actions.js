import { argCreator, keyMirror } from '../../utils';

export const TYPES = keyMirror([
  'APPRAISALS_CREATE',
  'APPRAISALS_DELETE',
  'APPRAISALS_UPDATE',
]);

export const createAppraisal = argCreator(TYPES.APPRAISALS_CREATE, ['appraisal']);

export const deleteAppraisal = argCreator(TYPES.APPRAISALS_DELETE, ['id']);

export const updateAppraisal = argCreator(TYPES.APPRAISALS_UPDATE, ['appraisal']);
