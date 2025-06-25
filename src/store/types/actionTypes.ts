import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const FETCH_CONTACTS_REQUEST = "FETCH_CONTACTS_REQUEST";
export const FETCH_CONTACTS_SUCESS = "FETCH_CONTACTS_SUCESS";
export const FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR";

export const FETCH_GROUPS_REQUEST = "FETCH_GROUPS_REQUEST";
export const FETCH_GROUPS_SUCESS = "FETCH_GROUPS_SUCESS";
export const FETCH_GROUPS_ERROR = "FETCH_GROUPS_ERROR";

export const FETCH_FAVORITES_REQUEST = "FETCH_FAVORITES_REQUEST";
export const FETCH_FAVORITES_SUCESS = "FETCH_FAVORITES_SUCESS";
export const FETCH_FAVORITES_ERROR = "FETCH_FAVORITES_ERROR";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export interface ContactsState {
  contacts: ContactDto[];
  loading: boolean;
  error: string | null;
}

export interface GroupsState {
  groups: GroupContactsDto[];
  loading: boolean;
  error: string | null;
}
export interface FavoritesState {
  items: string[];
  favoritesLoading: boolean,
  favoritesError: null | string
}

export interface RootState {
  contacts: ContactsState;
  groups: GroupsState;
  favorites: FavoritesState;
}

interface FetchContactsRequestAction {
  type: typeof FETCH_CONTACTS_REQUEST;
}
interface FetchContactsSuccessAction {
  type: typeof FETCH_CONTACTS_SUCESS;
  payload: ContactDto[];
}
interface FetchContactsErrorAction {
  type: typeof FETCH_CONTACTS_ERROR;
  payload: string;
}

interface FetchGroupsRequestAction {
  type: typeof FETCH_GROUPS_REQUEST;
}
interface FetchGroupsSuccessAction {
  type: typeof FETCH_GROUPS_SUCESS;
  payload: GroupContactsDto[];
}
interface FetchGroupsErrorAction {
  type: typeof FETCH_GROUPS_ERROR;
  payload: string;
}

interface FetchRequestFavoriteAction {
  type: typeof FETCH_FAVORITES_REQUEST;
}
interface FetchSuccessFavoriteAction {
  type: typeof FETCH_FAVORITES_SUCESS;
  payload: string[];
}
interface FetchErrorFavoriteAction {
  type: typeof FETCH_FAVORITES_ERROR;
  payload: string;
}

interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: string;
}

interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  payload: string;
}

export type ContactsActionTypes =
  | FetchContactsRequestAction
  | FetchContactsSuccessAction
  | FetchContactsErrorAction;

export type GroupsActionTypes =
  | FetchGroupsRequestAction
  | FetchGroupsSuccessAction
  | FetchGroupsErrorAction;

export type FavoritesActionTypes = AddFavoriteAction | RemoveFavoriteAction | FetchRequestFavoriteAction | FetchSuccessFavoriteAction | FetchErrorFavoriteAction

export type AppActionTypes =
  | ContactsActionTypes
  | GroupsActionTypes
  | FavoritesActionTypes;
