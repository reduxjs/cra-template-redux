import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
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

const selectors = {
  selectCount,
};

const { actions } = slice;

export { actions, selectors, slice };
export default slice.reducer;
