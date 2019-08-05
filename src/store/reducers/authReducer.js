import {AUTH_SIGNIN} from '../actions';
import {TOKEN_KEY} from '../../services/auth';

export const INITIAL_STATE = {
  email: null,
  token: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      localStorage.setItem(TOKEN_KEY, action.payload.token);

      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token
      };
    default:
      return state;
  }
};

export default AuthReducer;
