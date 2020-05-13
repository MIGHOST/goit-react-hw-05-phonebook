import {
  getContacts,
  deleteContact,
  addOneContact,
} from '../action/contactAction';
import { createReducer } from '@reduxjs/toolkit';
import findContactInStore from '../../helpers/findContactInStore';

const contactReducer = createReducer([], {
  [addOneContact]: (state, { payload }) => {
    if (findContactInStore(state, payload)) {
      return state;
    }
    return [...state, payload];
  },

  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [getContacts]: (state, { payload }) => [...state, payload],
});

export default contactReducer;
