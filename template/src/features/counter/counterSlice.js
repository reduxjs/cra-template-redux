import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fakeAsyncCall } from './fakeApi';

// The function produced by `createAsyncThunk` below is called a thunk.
// It allows us to perform async logic. It can be dispatched like a regular action:
// `dispatch(incrementAsync(10))`.
// The `thunkApi` argument has `dispatch`, `getState` and other functions available.
// See https://redux-toolkit.js.org/api/createAsyncThunk
// Async code can then be executed and other actions can be dispatched.
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount, thunkApi) => {
    const value = await fakeAsyncCall(amount);
    return value;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
