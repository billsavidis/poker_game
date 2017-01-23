import { createStore } from 'redux';
import { handControl } from './reducers';
import { initialState } from './initialstate';

const store = createStore(
  handControl,
  initialState
);

export {
  store,
};
