import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchSuccessTournament } from "../Actions/ActionCreator";
import { url_tournament } from "../Config";

function requestGetTournaments(id) {
  return axios.get(`${url_tournament}${id}`);
}

export function* handleGetTournaments(action) {
  try {
    const response = yield call(requestGetTournaments, action.id);
    const tournaments = response.data;
    yield put(fetchSuccessTournament(tournaments.matches));
  } catch (error) {
    console.log(error);
  }
}
