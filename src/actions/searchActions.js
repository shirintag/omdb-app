import { ActionTypes } from "./actionTypes";
import { localStorageFunction } from "../utils";
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

export const searchMovie = (keyword) => {
  localStorageFunction(keyword);

  return (dispatch) => {
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=424b1648`)
      .then((response) => response.json())
      .then((data) => dispatch(searchSuccessed(data.Search)))
      .catch((error) => {
        dispatch(searchFailed(error));
      });
  };
};
