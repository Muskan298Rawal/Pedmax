import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchSuccessSports } from "../Actions/ActionCreator";
import { url_sports_list } from "../Config";

function requestGetSports() {
  return axios.get(url_sports_list);
}

export function* handleGetSports() {
  try {
    const response = yield call(requestGetSports);
    const games = response.data;
    yield put(fetchSuccessSports(games.sports));
  } catch (error) {
    console.log(error);
  }
}
