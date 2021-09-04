import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
//import types from './contact-types';

//const addContact = createAction(types.ADD,)


const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
    },
  }
));


const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contscts/changeFilter');

const contactActions = {
    addContact, 
    deleteContact, 
    changeFilter
  };

export default contactActions;

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });


// const changeFilter = text => ({
//     type: types.CHANGE_FILTER,
//     payload: text,
// });