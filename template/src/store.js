import { configureStore } from '@reduxjs/toolkit';
import * as slices from './features';

export default configureStore({
  reducer: {
    [slices.counterSlice.name]: slices.counterSlice.reducer,
  },
});
