import api from '../../services/api';
import {AUTH_ERROR, AUTH_SIGNIN, AUTH_SIGNUP} from './types';

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

export const SignUpAction = (email, job, password) => dispatch => {
  // TODO utilizar os parametros de cadastro

  return api.post('/users', {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  }).then((response) => {
    dispatch({
      type: AUTH_SIGNUP,
      payload: {
        email,
        job,
        createdAt: response.data.createdAt
      }
    });
  }).catch(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: 'Ocorreu um erro ao registrar sua conta.'
      }
    });
  });
};
