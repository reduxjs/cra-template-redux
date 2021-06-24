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

export const selectActionStatus = createSelector(statusSelector, (status) => ({
  isPending: status === 'pending',
  wasFulfilled: status === 'fulfilled',
  wasRejected: status === 'rejected',
}));

export default statusSlice.reducer;
