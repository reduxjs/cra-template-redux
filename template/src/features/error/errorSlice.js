import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = '';

const wasRejectedAction = (action) => action.type.endsWith('/rejected');

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(wasRejectedAction, (_, action) => {
      return action.error.message;
    });
  },
});

export const { reset } = errorSlice.actions;

const errorSelector = (state) => state.error;

export const selectErrorMessage = createSelector(
  errorSelector,
  (error) => error,
);

export default errorSlice.reducer;
