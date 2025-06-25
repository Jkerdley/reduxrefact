import { ThunkAction } from "redux-thunk";
import {
  AppActionTypes,
  FETCH_GROUPS_REQUEST,
  FETCH_GROUPS_SUCESS,
  FETCH_GROUPS_ERROR,
  RootState,
} from "../types/actionTypes";

export function fetchGroups(): ThunkAction<
  void,
  RootState,
  void,
  AppActionTypes
> {
  return async (
    dispatch: (arg0: { type: string; payload?: unknown }) => void
  ) => {
    dispatch({ type: FETCH_GROUPS_REQUEST });
    try {
      const response = await fetch("/database/group-contacts.json");
      if (!response.ok) {
        throw new Error(`Ошибка HTTP запроса: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: FETCH_GROUPS_SUCESS, payload: data });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      dispatch({ type: FETCH_GROUPS_ERROR, payload: errorMessage });
    }
  };
}
