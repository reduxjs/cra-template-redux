import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

const selectCount = state => state.counter;

const selectors = {
  selectCount
};

const { actions } = slice;

export { actions, selectors, slice };
export default slice.reducer;
