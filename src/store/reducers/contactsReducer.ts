import { ContactsActionTypes, ContactsState, FETCH_CONTACTS_ERROR, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCESS } from "../types/actionTypes";

const initialState: ContactsState = {
  contacts: [],
  loading: false,
  error: null
}
export const contactsReducer = (
  state = initialState,
  action: ContactsActionTypes
) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CONTACTS_SUCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload
      };
    case FETCH_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
