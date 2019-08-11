import api from './api';

export const fetchAll = (params = {}) => {
  return api.get('/users');
};
