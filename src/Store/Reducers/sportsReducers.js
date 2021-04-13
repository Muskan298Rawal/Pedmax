import { FETCH_SUCCESS_SPORTS } from "../Actions/ActionTypes";

const sportsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS_SPORTS: {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

export default sportsReducer;
