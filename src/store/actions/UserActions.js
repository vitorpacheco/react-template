import api from '../../services/api';
import {USERS_FETCH_ALL} from './types';

export const UsersFetchAll = (params) => dispatch => {
  return api.get('/users', {
    params: {...params}
  }).then((response) => {
    return dispatch({
      type: USERS_FETCH_ALL,
      payload: {
        pagination: {
          total: response.data.total
        },
        data: response.data.data
      }
    });

    // setPagination({
    //   total: response.data.total
    // });
    //
    // setData(response.data.data);
    //
    // setLoading(false);
  }).catch(() => {
    return dispatch({
      type: USERS_FETCH_ALL,
      payload: {
        pagination: {},
        data: []
      }
    });

    // setLoading(false);
  });
};
