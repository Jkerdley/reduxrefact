import { ThunkAction } from "redux-thunk";
import {
  AppActionTypes,
  FETCH_CONTACTS_ERROR,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCESS,
  RootState,
} from "../types/actionTypes";

export function fetchContacts(): ThunkAction<
  void,
  RootState,
  void,
  AppActionTypes
> {
  return async (
    dispatch: (arg0: { type: string; payload?: unknown }) => void
  ) => {
    dispatch({ type: FETCH_CONTACTS_REQUEST });
    try {
      const response = await fetch("/database/contacts.json");
      if (!response.ok) {
        throw new Error(`Ошибка HTTP запроса: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: FETCH_CONTACTS_SUCESS, payload: data });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      dispatch({ type: FETCH_CONTACTS_ERROR, payload: errorMessage });
    }
  };
}
