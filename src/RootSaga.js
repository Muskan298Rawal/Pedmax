import {
  GET_COUNTRY,
  GET_LIVE_TOURNAMENTS,
  GET_MATCH_DETAIL,
  GET_SEARCH_DATA,
  GET_SPORT,
  GET_TOURNAMENT,
} from "./Store/Actions/ActionTypes";
import { all, takeLatest } from "redux-saga/effects";
import { handleGetSports } from "./Store/Sagas/saga_sport";
import { handleGetCountry } from "./Store/Sagas/saga_country";
import { handleGetTournaments } from "./Store/Sagas/saga_tournaments";
import { handleLiveTournaments } from "./Store/Sagas/saga_live";
import { handleGetSearch } from "./Store/Sagas/saga_search";
import { handleGetMatch } from "./Store/Sagas/saga_match_detail";

export function* watcherSaga() {
  yield all([
    takeLatest(GET_SPORT, handleGetSports),
    takeLatest(GET_COUNTRY, handleGetCountry),
    takeLatest(GET_TOURNAMENT, handleGetTournaments),
    takeLatest(GET_LIVE_TOURNAMENTS, handleLiveTournaments),
    takeLatest(GET_SEARCH_DATA, handleGetSearch),
    takeLatest(GET_MATCH_DETAIL, handleGetMatch),
  ]);
}
