import {USERS_FETCH_ALL} from '../actions/types';

export const INITIAL_STATE = {
  data: [],
  pagination: {},
  loading: false
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_FETCH_ALL:
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.pagination,
        loading: false
      };
    default:
      return state;
  }
};

export default UserReducer;
