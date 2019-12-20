import { configureStore } from '@reduxjs/toolkit';
import * as slices from './ducks';

const store = configureStore({
  reducer: {
    [slices.counterSlice.name]: slices.counterSlice.reducer,
  },
});

export default store;
