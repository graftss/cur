import { prop } from 'ramda';

import { getTime, uuid } from '../../utils';

export const newAppraisal = (name, tabIds) => ({
  id: uuid(),
  lastUpdated: getTime(),
  name,
  tabIds,
});

export const appraisalSchema = {
  id: prop('id'),
  lastUpdated: prop('lastUpdated'),
  name: prop('name'),
  tabIds: prop('tabIds'),
};
