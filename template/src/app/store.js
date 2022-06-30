import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState,
  });
};

export const store = setupStore();
