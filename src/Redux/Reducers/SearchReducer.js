import {
  SEARCH_MOVIE,
  FETCH_MOVIE_LIST,
  FETCH_EXACT_ITEM,
  LOADING,
} from "../Actions/type";

const initialState = {
  text: "",
  movies: [],
  loading: false,
  exactItemLoadState: false,
  exactItem: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIE_LIST:
      return {
        movies: action.payload,
        loading: false,
        exactItem: [],
      };
    case FETCH_EXACT_ITEM:
      return {
        ...state,
        exactItem: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
