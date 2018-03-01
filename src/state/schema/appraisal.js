import { prop } from 'ramda';

import { getTime, uuid } from '../../utils';

export const newAppraisal = (name, tabIds) => ({
  id: uuid(),
  lastUpdated: undefined,
  name,
  tabIds,
});

export const appraisalSchema = {
  id: prop('id'),
  lastUpdated: prop('lastUpdated'),
  name: prop('name'),
  tabIds: prop('tabIds'),

  update: appraisal => ({ ...appraisal, lastUpdated: getTime() }),
};
