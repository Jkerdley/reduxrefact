import { ThunkAction } from "redux-thunk";
import {
  AppActionTypes,
  FETCH_FAVORITES_ERROR,
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCESS,
  RootState,
} from "../types/actionTypes";

export function fetchFavorites(): ThunkAction<
  void,
  RootState,
  void,
  AppActionTypes
> {
  return async (
    dispatch: (arg0: { type: string; payload?: unknown }) => void
  ) => {
    dispatch({ type: FETCH_FAVORITES_REQUEST });
    try {
      const response = await fetch("/database/contacts.json");
      if (!response.ok) {
        throw new Error(`Ошибка HTTP запроса: ${response.status}`);
      }
      const data = await response.json();
      const favorites =  [
                data[0].id,
                data[1].id,
                data[2].id,
                data[3].id,
                data[4].id,
            ]
    console.log('favorites', favorites);
            
      dispatch({ type: FETCH_FAVORITES_SUCESS, payload: favorites });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      dispatch({ type: FETCH_FAVORITES_ERROR, payload: errorMessage });
    }
  };
}
