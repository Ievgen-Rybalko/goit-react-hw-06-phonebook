import { combineReducers } from 'redux';
//import types from './contacts/contact-types';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-actions';
// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => {
        const isNew = state.some(contact => contact.name === payload.name);
            if (isNew) { 
                alert(`${payload.name} is already in contacts.`);
                return;  //return state; ?
            }
                      
            return [...state, payload]; 
    },
    [actions.deleteContact]: (state, { payload }) => {
        return state.filter(({id}) => id !== payload);
    }
});
           
const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => {
        return payload.toLowerCase();
    }
});

export default combineReducers({ items, filter });