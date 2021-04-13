import { FETCH_SEARCH_SUCCESS } from "../Actions/ActionTypes";

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SEARCH_SUCCESS: {
      return { ...action.payload };
    }
    default:
      return state;
  }
};

export default searchReducer;