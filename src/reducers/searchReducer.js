import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  isLoding: false,
  movies: [],
  error: "",
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
      };
    default:
      return state;
  }
};

export default searchReducer;
