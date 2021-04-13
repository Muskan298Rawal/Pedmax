import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchSuccessCountry } from "../Actions/ActionCreator";
import { url_country } from "../Config";

function requestGetCountries(id) {
  return axios.get(`${url_country}${id}`);
}

export function* handleGetCountry(action) {
  try {
    const response = yield call(requestGetCountries, action.id);
    const countries = response.data;
    yield put(fetchSuccessCountry(countries.countries));
  } catch (error) {
    console.log(error);
  }
}
