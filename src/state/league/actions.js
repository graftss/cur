import { argCreator, keyMirror } from '../../utils';

export const TYPES = keyMirror([
  'LEAGUE_SET',
]);

export const setLeague = argCreator(TYPES.LEAGUE_SET, ['league']);
