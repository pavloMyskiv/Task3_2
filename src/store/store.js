import { createStore } from 'redux';
import { counterReducer } from './counter/counterReducer';

const initialState = {
  number: 0,
};
const store = createStore(counterReducer, initialState);

export default store;
