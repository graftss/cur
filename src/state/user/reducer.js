import { TYPES } from './actions';

const initialState = {
  loggedIn: false,
  loggingIn: false,
  error: false,
  username: '',
  poesessid: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.USER_LOGIN_REQUEST: {
      const loginState = { loggingIn: true, loggedIn: false, error: false };

      return { ...state, ...loginState };
    }

    case TYPES.USER_LOGIN_FAILURE: {
      const loginState = { loggingIn: false, loggedIn: false, error: true };

      return { ...state, ...loginState };
    }

    case TYPES.USER_LOGIN_SUCCESS: {
      const { username, poesessid } = action.payload;
      const loginState = { loggingIn: false, loggedIn: true, error: false };

      return { ...state, ...loginState, username, poesessid };
    }

    default: return state;
  }
}
