import { createReducer } from '@reduxjs/toolkit';
import filterContact from '../action/filterAction';

const filteredContact = createReducer('', {
  [filterContact]: (state, { payload }) => payload,
});

export default filteredContact;
