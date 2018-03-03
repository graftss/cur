import { TYPES } from './actions';

const initialState = {
  current: 'Bestiary',
  all: ['Standard', 'Bestiary'],
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TYPES.LEAGUE_SET: {
      return { ...state, current: payload.league };
    }

    default: return state;
  }
}
