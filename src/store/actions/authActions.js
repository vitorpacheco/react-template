import api from '../../services/api';
import {AUTH_ERROR, AUTH_SIGNIN} from './types';

export const SignInAction = (email, password) => dispatch => {
  // TODO utilizar os parametros de login

  return api.post('/login', {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  }).then((response) => {
    dispatch({
      type: AUTH_SIGNIN,
      payload: {
        email,
        token: response.data.token
      }
    });
  }).catch(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: 'Houve um problema com o login, verifique suas credenciais.'
      }
    });
  });
};
