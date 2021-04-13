import { PLACE_BET } from '../Actions/ActionTypes'

const betsReducer = (state = [], action) => {
    switch (action.type) {
      case PLACE_BET: {
        return [...action.payload];
      }
      default:
        return state;
    }
  };
  
  export default betsReducer;