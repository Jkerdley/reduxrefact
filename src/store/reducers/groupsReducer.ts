import { FETCH_GROUPS_ERROR, FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCESS, GroupsActionTypes, GroupsState } from "../types/actionTypes";

const initialState: GroupsState = {
  groups: [],
  loading: false,
  error: null
}
export const groupsReducer = (
  state = initialState,
  action: GroupsActionTypes
) => {
  switch (action.type) {
    case FETCH_GROUPS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_GROUPS_SUCESS:
      return {
        ...state,
        loading: false,
        groups: action.payload
      };
    case FETCH_GROUPS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
