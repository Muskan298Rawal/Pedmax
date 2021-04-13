import { FETCH_LIVE_SUCCESS } from "../Actions/ActionTypes";

const liveReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LIVE_SUCCESS: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default liveReducer;
