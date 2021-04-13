import { combineReducers } from "redux";
import countryReducer from "./countryReducer";
import liveReducer from "./liveReducer";
import matchReducer from "./matchReducer";
import searchReducer from "./searchReducer";
import sportsReducer from "./sportsReducers";
import tournamentReducer from "./tournamentReducer";

const allreducers = combineReducers({
  games: sportsReducer,
  country: countryReducer,
  tournament: tournamentReducer,
  live: liveReducer,
  match: matchReducer,
  search: searchReducer,
});

export default allreducers;
