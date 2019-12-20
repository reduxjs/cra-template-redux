import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

const selectCount = state => state.counter.value;

export const selectors = {
  selectCount,
};

export const { actions } = slice;
export default slice.reducer;
