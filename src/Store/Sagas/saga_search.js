import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchSearchSuccess } from "../Actions/ActionCreator";
import { url_search } from "../Config";

function requestGetSearch(name) {
  console.log("name", name)
  return axios.get(
    `${url_search}${name}`
  );
}

export function* handleGetSearch(action) {
  try {
    const response = yield call(requestGetSearch, action.name);
    const research = response.data;
    yield put(fetchSearchSuccess(research));
  } 
  catch (error) {
    console.log(error);
  }
}