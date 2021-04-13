import { FETCH_SUCCESS_TOURNAMENT } from "../Actions/ActionTypes";

const tournamentReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS_TOURNAMENT: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default tournamentReducer;
