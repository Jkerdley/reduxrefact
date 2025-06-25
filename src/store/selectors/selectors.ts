import { RootState } from "../types/actionTypes";

export const contactSelector = (state: RootState) => state.contacts;
export const groupsSelector = (state: RootState) => state.groups;
export const favoritesSelector = (state: RootState) => state.favorites;
