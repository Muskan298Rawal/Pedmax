import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchSuccessLiveTournament } from "../Actions/ActionCreator";
import { url_live } from "../Config";

function requestGetLiveTournaments(id) {
  return axios.get(`${url_live}${id}`);
}

export function* handleLiveTournaments(action) {
  try {
    const response = yield call(requestGetLiveTournaments, action.id);
    const livedata = response.data;
    yield put(fetchSuccessLiveTournament(livedata.matches));
  } catch (error) {
    console.log(error);
  }
}
