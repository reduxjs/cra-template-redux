import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [ ...getDefaultMiddleware() ],
});
