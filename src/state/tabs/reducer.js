import { assoc } from 'ramda';

import { TYPES } from './actions';

const initialState = {
  fetching: false,
  tabs: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TABS_REQUEST: {
      return { ...state, fetching: true };
    }

    case TYPES.TABS_SUCCESS: {
      const { league, tabs } = action.payload;

      return {
        ...state,
        fetching: false,
        tabs: assoc(league, tabs, state.tabs),
      };
    }

    default: return state;
  }
}
