import { TYPES } from './actions';

const initialState = {
  fetching: false,
  tabs: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TYPES.TABS_REQUEST: {
      return { ...state, fetching: true };
    }

    case TYPES.TABS_SUCCESS: {
      return { ...state, fetching: false, tabs: payload.tabs };
    }

    default: return state;
  }
}
