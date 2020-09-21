import { ActionTypes } from "../actions/actionTypes";
import { getLastSearches } from "../utils";

const initialState = {
  movies: [],
  error: false,
  lastSearches: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        error: false,
        movies: action.movies,
      };
    case ActionTypes.SEARCH_FAIL:
      return {
        ...state,
        error: true,
      };
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
