import {
  SEARCH_MOVIE,
  FETCH_MOVIE_LIST,
  FETCH_EXACT_ITEM,
  LOADING,
} from "./type";
import axios from "axios";
import { CONSTANTS } from "../../config";
//import  from 'redux-thunk';
export function searchMovies(text) {
  return {
    type: SEARCH_MOVIE,
    payload: text,
  };
}

export function fetchMovieList(text) {
  return function (dispatch) {
    axios
      .get(`http://www.omdbapi.com/?apikey=${CONSTANTS.API_KEY}&s=${text}`)
      .then((response) => {
        dispatch({
          type: FETCH_MOVIE_LIST,
          payload: response.data,
        });
      });
  };
}

export function exactItem(id) {
  return function (dispatch) {
    axios
      .get(`http://www.omdbapi.com/?apikey=${CONSTANTS.API_KEY}&i=${id}`)
      .then((response) => {
        dispatch({
          type: FETCH_EXACT_ITEM,
          payload: response.data,
        });
      });
  };
}

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
