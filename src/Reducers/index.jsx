// Reducers/index.js

import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer';
import ContactListReducer from './ContactListReducer';
import WhatsappContactListReducer from './WhatsappContactListReducer';

const RootReducer = combineReducers({
  contact: ContactReducer,
  contactList: ContactListReducer,
  whatsappList:WhatsappContactListReducer,
  // Add more reducers as needed
});

export default RootReducer;
