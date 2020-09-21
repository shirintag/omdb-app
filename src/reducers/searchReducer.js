import { ActionTypes } from "../actions/actionTypes";
import { getLastSearches } from "../utils";

const initialState = {
  isLoding: false,
  movies: [],
  error: "",
  lastSearches: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        isLoding: false,
      };
    case ActionTypes.SEARCH_FAIL:
      return {
        ...state,
        isLoding: false,
      };
    case ActionTypes.SEARCH_LODING:
      return {
        ...state,
        isLoding: true,
    case ActionTypes.SEARCH_KEYWORD:
      let lastSearches = getLastSearches(state.lastSearches, action.keyword);
      return {
        ...state,
        lastSearches: lastSearches,
      };
    default:
      return state;
  }
};

export default searchReducer;
