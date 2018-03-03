import { prop } from 'ramda';

import { getTime, uuid } from '../../utils';

export const newAppraisal = (name, tabIds, league) => ({
  createdOn: getTime(),
  id: uuid(),
  lastUpdated: undefined,
  league,
  name,
  tabIds,
});

export const editAppraisal = (appraisal, name, tabIds) => ({
  ...appraisal,
  name,
  tabIds,
});

export const appraisalSchema = {
  createdOn: prop('createdOn'),
  id: prop('id'),
  lastUpdated: prop('lastUpdated'),
  league: prop('league'),
  name: prop('name'),
  tabIds: prop('tabIds'),

  update: appraisal => ({ ...appraisal, lastUpdated: getTime() }),
};
