import { createStore } from 'redux';
import { counterReducer } from './reducers/counterReducer';

const initialState = {
  number: 0,
};
const store = createStore(counterReducer, initialState);

export default store;
