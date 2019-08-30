import * as types from './types';
import { post } from './api';

export const login = (accessToken, userId) => dispatch => {
  return dispatch(post('/api/auths', { accessToken, userId }));
};
