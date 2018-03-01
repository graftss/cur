import { curry, prop } from 'ramda';

export const allLogs = prop('logs');

export const logById = curry((state, id) => allLogs(state).find(a => a.id === id));
