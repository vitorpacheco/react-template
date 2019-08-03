import {isNil} from 'lodash';

export const TOKEN_KEY = '@auth-Token';

export const isAuthenticated = () => !isNil(localStorage.getItem(TOKEN_KEY));

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
   localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};
