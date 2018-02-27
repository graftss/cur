import { curry, prop } from 'ramda';

export const allAppraisals = prop('appraisals');

export const appraisalById = curry((state, id) => state.find(a => a.id === id));
