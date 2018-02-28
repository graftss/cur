import { curry, prop } from 'ramda';

export const allAppraisals = prop('appraisals');

export const appraisalById = curry((state, id) => (
  allAppraisals(state).find(a => a.id === id)
));
