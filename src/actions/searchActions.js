import { ActionTypes } from "./actionTypes";
import { authenticate } from "../api/mockApi";

export const searchSuccessed = (movies) => {
  return {
    type: ActionTypes.SEARCH_SUCCESS,
    movies,
  };
};

export const searchIsLoding = () => {
  return {
    type: ActionTypes.SEARCH_LODING,
  };
};

export const searchFailed = (error) => {
  return {
    type: ActionTypes.SEARCH_FAIL,
    error,
  };
};

export const searchMovie = (movie) => {
  return (dispatch) => {
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=424b1648`)
      .then((response) => response.json())
      .then((data) => dispatch(searchSuccessed(data.Search)))
      .catch((error) => {
        dispatch(searchFailed(error));
      });
  };
};
