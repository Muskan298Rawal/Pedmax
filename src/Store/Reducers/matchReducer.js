import { FETCH_MATCH_SUCCESS } from "../Actions/ActionTypes";

const matchReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MATCH_SUCCESS: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default matchReducer;
