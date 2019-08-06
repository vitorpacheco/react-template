import {combineReducers} from 'redux';

import authReducer from './AuthReducer';
import userReducer from './UsersReducer';

export default combineReducers({
  authReducer,
  userReducer,
})
