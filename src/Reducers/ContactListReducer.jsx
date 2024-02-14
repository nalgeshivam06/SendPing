// //Recucers/ContactListReducer.jsx




import { ADD_CONTACT_TO_LIST } from "../Actions/ContactActions";
import { ADD_LIST } from "../Actions/ContactActions";
import { SELECT_LIST } from "../Actions/ContactActions";

const initialState = {
  lists: [],
  selectedListId: null,
};

const ContactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIST:
      return {
        ...state,
        selectedListId: action.payload,
      };
    case ADD_LIST:
      const newStateAfterAddingList = {
        ...state,
        lists: [...state.lists, action.payload], // Add the new list to the existing lists array
      };
      console.log("Updated state after adding list:", newStateAfterAddingList);
      return newStateAfterAddingList;
    
    case ADD_CONTACT_TO_LIST:
      const { listId, contact } = action.payload;
      // Find the list with the specified listId
      const updatedLists = state.lists.map(list => {
        if (list.id === listId) {
          // Add the new contact to the contacts array of the list
          return {
            ...list,
            contacts: [...list.contacts, contact]
          };
        }
        return list;
      });
      
      return {
        ...state,
        lists: updatedLists
      };
    default:
      return state;
  }
};

export default ContactListReducer;
