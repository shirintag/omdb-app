import { ActionTypes } from "./actionTypes";
export const searchSuccessed = (movies) => {
  return {
    type: ActionTypes.SEARCH_SUCCESS,
    movies,
  };
};

export const searchFailed = (error) => {
  return {
    type: ActionTypes.SEARCH_FAIL,
    error,
  };
};

export const saveLastSearch = (keyword) => {
  return {
    type: ActionTypes.SEARCH_KEYWORD,
    keyword,
  };
};

export const searchMovie = (keyword) => {
  return (dispatch) => {
    dispatch(saveLastSearch(keyword));
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=424b1648`)
      .then((response) => response.json())
      .then((data) => dispatch(searchSuccessed(data.Search)))
      .catch((error) => {
        dispatch(searchFailed(error));
      });
  };
};
