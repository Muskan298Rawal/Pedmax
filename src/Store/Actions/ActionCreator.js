import {
  GET_SPORT,
  FETCH_LIVE_SUCCESS,
  GET_LIVE_TOURNAMENTS,
  FETCH_SUCCESS_SPORTS,
  GET_COUNTRY,
  FETCH_SUCCESS_COUNTRY,
  FETCH_SUCCESS_TOURNAMENT,
  GET_TOURNAMENT,
  FETCH_SEARCH_SUCCESS,
  GET_SEARCH_DATA,
  GET_MATCH_DETAIL,
  FETCH_MATCH_SUCCESS
} from "./ActionTypes";

export const getSports = () => {
  return {
    type: GET_SPORT,
  };
};

export const fetchSuccessSports = (data) => {
  return {
    type: FETCH_SUCCESS_SPORTS,
    payload: data,
  };
};

export const getCountry = (id) => {
  return {
    type: GET_COUNTRY,
    id: id,
  };
};

export const fetchSuccessCountry = (data) => {
  return {
    type: FETCH_SUCCESS_COUNTRY,
    payload: data,
  };
};

export const getTournament = (id) => {
  return {
    type: GET_TOURNAMENT,
    id: id,
  };
};

export const fetchSuccessTournament = (data) => {
  return {
    type: FETCH_SUCCESS_TOURNAMENT,
    payload: data,
  };
};

export const getLiveTournament = (id) => {
  return {
    type: GET_LIVE_TOURNAMENTS,
    id: id,
  };
};

export const fetchSuccessLiveTournament = (data) => {
  return {
    type: FETCH_LIVE_SUCCESS,
    payload: data,
  };
};

export const getSearchData = (name) => {
  return {
    type: GET_SEARCH_DATA,
    name: name,
  };
};

export const fetchSearchSuccess = (data) => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: data,
  };
};

export const getMatchDetail = (id) => {
  return {
    type: GET_MATCH_DETAIL,
    payload: id,
  };
};

export const fetchMatchSuccess = (data) => {
  return {
    type: FETCH_MATCH_SUCCESS,
    payload: data,
  };
};
