import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducer/contactReduce';
import filterReducer from './reducer/filterReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  devToolsEnhancer(),
);

export default store;
