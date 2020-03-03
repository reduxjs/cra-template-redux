import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    isLoading: false,
    err: '',
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to 'mutate' the state. It doesn't actually
      // mutate the state because it uses the immer library, which detects
      // changes to a "draft state" and produces a brand new immutable state
      // based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload.amount;
    },
    incrementByAmountAsyncRequest: state => {
      state.isLoading = true;
    },
    incrementByAmountAsyncSuccess: (state, action) => {
      state.value += action.payload.amount;
      state.isLoading = false;
    },
    incrementByAmountAsyncFailure: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    }
  }
});

export const selectCount = state => state.counter.value;
export const isLoading = state => state.counter.isLoading;

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementByAmountAsyncRequest,
  incrementByAmountAsyncSuccess,
  incrementByAmountAsyncFailure
} = slice.actions;

export default slice.reducer;

export const incrementByAmountAsync = payload => async dispatch => {
  dispatch(incrementByAmountAsyncRequest());
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (err) {
    dispatch(incrementByAmountAsyncFailure(err.toString()));
    return;
  }
  dispatch(incrementByAmountAsyncSuccess(payload));
};
