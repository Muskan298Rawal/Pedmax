import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchMatchSuccess } from "../Actions/ActionCreator";

function requestGetMatches(id) {
  return axios.get(
    `https://api.pedmax.com/api/v1/matches?tournament_id=${id}&markets=false&statistics=false`
  );
}

export function* handleGetMatch(action) {
  try {
    const response = yield call(requestGetMatches, action.payload);
    const matchdata = response.data;
    yield put(fetchMatchSuccess(matchdata.matches));
  } catch (error) {
    console.log(error);
  }
}
