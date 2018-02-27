import { TYPES } from './actions';

const initialState = {
  loggedIn: false,
  loggingIn: false,
  username: '',
  poesessid: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.USER_LOGIN_REQUEST: {
      return { ...state, loggingIn: true, loggedIn: false };
    }

    case TYPES.USER_LOGIN_FAILURE: {
      return { ...state, loggingIn: false, loggedIn: false };
    }

    case TYPES.USER_LOGIN_SUCCESS: {
      const { username, poesessid } = action.payload;

      return { ...state, loggingIn: false, loggedIn: true, username, poesessid };
    }

    default: return state;
  }
}
