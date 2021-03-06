import { axiosWithAuth } from '../utils/axios';
import localstorage from '../utils/localstorage';

export const types = {
  SET_SINGLE_SHOUTOUT: 'SET_SINGLE_SHOUTOUT',
  SET_PROFILE_SHOUTOUTS: 'SET_PROFILE_SHOUTOUTS',
  SET_USER_SHOUTOUTS: 'SET_USER_SHOUTOUTS',
  SET_SHOUTOUTS_FEED: 'SET_SHOUTOUTS_FEED',
  FETCHING_SHOUTOUT: 'FETCHING_SHOUTOUT',
  SHOUTOUT_ERROR: 'SHOUTOUT_ERROR',
};

export const setSingleShoutout = shoutout => {
  return {
    type: types.SET_SINGLE_SHOUTOUT,
    payload: shoutout,
  };
};

export const setError = error => {
  return {
    type: types.SHOUTOUT_ERROR,
    payload: error,
  };
};

export const getSingleShoutout = id => async dispatch => {
  dispatch({ type: types.FETCHING_SHOUTOUT });
  try {
    const res = await axiosWithAuth().get('/api/shoutouts/' + id);
    dispatch(setSingleShoutout(res.data.data));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const getProfileShoutouts = (userId = null) => async dispatch => {
  dispatch({ type: types.FETCHING_SHOUTOUT });
  try {
    const { data } = await axiosWithAuth().get(
      `/api/users/${userId || localstorage.get().id}/shoutouts`
    );

    userId
      ? dispatch({ type: types.SET_USER_SHOUTOUTS, payload: data.data || data })
      : dispatch({ type: types.SET_PROFILE_SHOUTOUTS, payload: data.data || data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: types.SHOUTOUT_ERROR, payload: error.response.data.message });
      return;
    }
    dispatch({ type: types.SHOUTOUT_ERROR, payload: error.message });
  }
};

export const getShoutoutsFeed = (page = 1) => async dispatch => {
  dispatch({ type: types.FETCHING_SHOUTOUT });
  try {
    const { data } = await axiosWithAuth().get(
      `/api/organizations/${localstorage.get().org_id}/shoutouts?page=${page}`
    );

    dispatch({ type: types.SET_SHOUTOUTS_FEED, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: types.SHOUTOUT_ERROR, payload: error.response.data.message });
      return;
    }
    dispatch({ type: types.SHOUTOUT_ERROR, payload: error.message });
  }
};
