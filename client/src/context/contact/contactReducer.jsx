/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  FILTER_CONTACTS,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
        filtered:
          state.filtered &&
          state.filtered.filter((contact) => contact.id !== action.payload),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
