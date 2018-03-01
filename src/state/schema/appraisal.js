import { prop } from 'ramda';

import { getTime, uuid } from '../../utils';

export const newAppraisal = (name, tabIds) => ({
  createdOn: getTime(),
  id: uuid(),
  lastUpdated: undefined,
  name,
  tabIds,
});

export const appraisalSchema = {
  createdOn: prop('createdOn'),
  id: prop('id'),
  lastUpdated: prop('lastUpdated'),
  name: prop('name'),
  tabIds: prop('tabIds'),

  update: appraisal => ({ ...appraisal, lastUpdated: getTime() }),
};
