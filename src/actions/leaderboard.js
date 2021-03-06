import { axiosWithAuth } from '../utils/axios';

export const FETCHING_LEADERBOARD = 'FETCHING_LEADERBOARD';
export const LEADERBOARD_FETCH_SUCCESS = 'LEADERBOARD_FETCH_SUCCESS';
export const LEADERBOARD_FETCH_FAIL = 'LEADERBOARD_FETCH_FAIL';

export const fetchLeaderBoard = () => async dispatch => {
  dispatch({ type: FETCHING_LEADERBOARD });
  try {
    const { data } = await axiosWithAuth().get('/api/leaderboard');
    dispatch({ type: LEADERBOARD_FETCH_SUCCESS, payload: data.data || data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: LEADERBOARD_FETCH_FAIL, message: error.message });
      return;
    }
    dispatch({ type: LEADERBOARD_FETCH_FAIL, message: error.message });
  }
};
