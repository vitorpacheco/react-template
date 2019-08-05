import axios from 'axios';

import {TOKEN_KEY} from '../store/reducers/authReducer';

const api = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    'content-type': 'application/json'
  }
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api
