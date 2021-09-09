import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

export const store = createStore();
