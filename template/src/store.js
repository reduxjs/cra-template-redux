import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [thunk],
});
