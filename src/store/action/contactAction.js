import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const getContacts = createAction('GET_CONTACTS/getContacts');

export const deleteContact = createAction('DELETE_CONTACT', id => ({
  payload: id,
}));

export const addOneContact = createAction('ADD_ONE_CONTACT', contact => ({
  payload: {
    ...contact,
    id: shortid.generate(),
  },
}));
