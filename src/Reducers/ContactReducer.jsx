// reducers/contactReducer.js

// import { ADD_CONTACT } from '../../Actions/ContactActions';
import { ADD_CONTACT } from "../actions/ContactActions";

const initialState = {
  contacts: [],
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

export default ContactReducer;
