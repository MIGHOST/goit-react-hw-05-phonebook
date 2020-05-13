import { createAction } from '@reduxjs/toolkit';

const filterContact = createAction('FILTER_CONTACT', event => ({
  payload: event.target.value,
}));

export default filterContact;
