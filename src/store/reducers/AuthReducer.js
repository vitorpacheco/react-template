import {AUTH_ERROR, AUTH_LOGOUT, AUTH_SIGNIN, AUTH_SIGNUP} from '../actions/types';
import {login, logout} from '../../services/auth';

export const INITIAL_STATE = {
  email: null,
  createdAt: null,
  token: null,
  isAuthenticated: false,
  error: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      login(action.payload.token);

      return {
        ...state,
        email: action.payload.email,
        createdAt: null,
        token: action.payload.token,
        isAuthenticated: true,
        error: null
      };
    case AUTH_SIGNUP:
      return {
        ...state,
        email: action.payload.email,
        createdAt: action.payload.createdAt,
        token: null,
        isAuthenticated: false,
        error: null
      };
    case AUTH_ERROR:
      logout();

      return {
        ...state,
        email: null,
        createdAt: null,
        token: null,
        isAuthenticated: false,
        error: action.payload.error
      };
    case AUTH_LOGOUT:
      logout();

      return {
        ...state,
        email: null,
        createdAt: null,
        token: null,
        isAuthenticated: false,
        error: null
      };
    default:
      return state;
  }
};

export default AuthReducer;
