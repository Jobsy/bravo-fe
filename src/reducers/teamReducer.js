import { FETCHING_TEAM, TEAM_FETCH_SUCCESS, TEAM_FETCH_FAIL } from '../actions/team';

const initialState = {
  isFetchingTeam: false,
  team: null,
  fetchingTeamError: '',
};
