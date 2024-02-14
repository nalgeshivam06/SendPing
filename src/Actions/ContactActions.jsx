//Actions/ContactActions.jsx

 // actions for mailing list
export const ADD_CONTACT = 'ADD_CONTACT';
export const ADD_CONTACT_TO_LIST = 'ADD_CONTACT_TO_LIST';
export const SELECT_LIST = 'SELECT_LIST';
export const ADD_LIST = 'ADD_LIST'; 

 // actions for whatsapp list
export const ADD_CONTACT_TO_WHATSAPP_LIST = 'ADD_CONTACT_TO_WHATSAPP_LIST';
export const ADD_WHATSAPP_LIST = 'ADD_WHATSAPP_LIST'; 

export const addContact = (contactData) => ({
  type: ADD_CONTACT,
  payload: contactData,
});

export const addContactToList = (listId, contact) => ({
  type: ADD_CONTACT_TO_LIST,
  payload: { listId, contact },
});

export const selectList = (listId) => ({
  type: SELECT_LIST,
  payload: listId,
});

export const addList = (list) => {
  console.log("addList action is called with list:", list);
  return {
    type: ADD_LIST,
    payload: list,
  };
};



export const addContactToWhatsappList = (listId, contact) => ({
  type: ADD_CONTACT_TO_WHATSAPP_LIST,
  payload: { listId, contact },
});


export const addWhatsappList = (whatsapplist) => {
  console.log("addWhatsappList action is called with list:", whatsapplist);
  return {
    type: ADD_WHATSAPP_LIST,
    payload: whatsapplist,
  };
};
