import { TYPES } from './actions';

const initialState = {
  fetching: false,
  prices: {},
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TYPES.PRICES_REQUEST: {
      return { ...state, fetching: true };
    }

    case TYPES.PRICES_SUCCESS: {
      return { ...state, fetching: false, prices: payload.prices };
    }

    case TYPES.PRICES_FAILURE: {
      return { ...state, fetching: false, prices: {} };
    }

    default: return state;
  }
}
