import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import { contactsReducer, favoritesReducer, groupsReducer } from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { AppActionTypes } from "./types/actionTypes";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, AppActionTypes>
>;
export const useAppStore = useStore<RootState>;
