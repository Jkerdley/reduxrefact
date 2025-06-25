import { ADD_FAVORITE, FavoritesActionTypes, FavoritesState, FETCH_FAVORITES_ERROR, FETCH_FAVORITES_REQUEST, FETCH_FAVORITES_SUCESS, REMOVE_FAVORITE } from "../types/actionTypes";

const initialState: FavoritesState = {
  items: [],
  favoritesLoading: false,
  favoritesError: null
}
export const favoritesReducer = (
  state = initialState,
  action: FavoritesActionTypes
) => {
  switch (action.type) {
     case FETCH_FAVORITES_REQUEST:
      return {
        ...state,
        favoritesLoading: true
      };
      case FETCH_FAVORITES_SUCESS:
      return {
        ...state,
        items: action.payload,
        favoritesLoading: false,
        errors: null
      };
      case FETCH_FAVORITES_ERROR:
      return {
        ...state,
        favoritesLoading: false,
        errors: action.payload
      };
    case ADD_FAVORITE:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
       items: state.items.filter((id) => id !== action.payload)
      };
    default:
      return state;
  }
};
