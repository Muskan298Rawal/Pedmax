import { FETCH_SUCCESS_COUNTRY } from "../Actions/ActionTypes";

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS_COUNTRY: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default countryReducer;
