import {AUTH_ERROR, AUTH_LOGOUT, AUTH_SIGNIN, AUTH_SIGNUP} from '../actions/types';

export const TOKEN_KEY = '@auth-Token';

export const INITIAL_STATE = {
  email: null,
  token: null,
  isAuthenticated: false,
  error: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      localStorage.setItem(TOKEN_KEY, action.payload.token);

      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        isAuthenticated: true
      };
    case AUTH_SIGNUP:
      return {
        ...state,
        email: action.payload.email,
        createdAt: action.payload.createdAt,
        isAuthenticated: false
      };
    case AUTH_ERROR:
      localStorage.removeItem(TOKEN_KEY);

      return {
        ...state,
        email: null,
        token: null,
        isAuthenticated: false,
        error: action.payload.error
      };
    case AUTH_LOGOUT:
      localStorage.removeItem(TOKEN_KEY);

      return {
        ...state,
        email: null,
        token: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default AuthReducer;
