import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {};

const isPendingAction = (action) => action.type.endsWith('/pending');

const wasRejectedAction = (action) => action.type.endsWith('/rejected');

const wasFulfilledAction = (action) => action.type.endsWith('/fulfilled');

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPendingAction, (state, action) => {
        state[action.type.substr(0, action.type.lastIndexOf('/'))] = 'pending';
      })
      .addMatcher(wasRejectedAction, (state, action) => {
        state[action.type.substr(0, action.type.lastIndexOf('/'))] = 'rejected';
      })
      .addMatcher(wasFulfilledAction, (state, action) => {
        state[action.type.substr(0, action.type.lastIndexOf('/'))] =
          'fulfilled';
      });
  },
});

export const { reset } = statusSlice.actions;

const statusSelector = (state, action) => state.status[action];

export const selectIsPending = createSelector(
  statusSelector,
  (status) => status === 'pending',
);

export const selectWasFulfilled = createSelector(
  statusSelector,
  (status) => status === 'fulfilled',
);

export const selectWasRejected = createSelector(
  statusSelector,
  (status) => status === 'rejected',
);

export default statusSlice.reducer;
