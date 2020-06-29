import reducer, {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import { fakeAsyncCall } from './fakeApi';

// To use the mock module, you must explicitly call jest.mock here
// https://jestjs.io/docs/en/manual-mocks
jest.mock('./fakeApi');

describe('counterSlice', () => {
  describe('reducers', () => {
    it('subtracts one from the current value', () => {
      const state = reducer({ value: 4 }, decrement());
      expect(state).toEqual({ value: 3 });
    });

    it('adds one to the current value', () => {
      const state = reducer({ value: 0 }, increment());
      expect(state).toEqual({ value: 1 });
    });

    it('adds the payload to the current value', () => {
      const state = reducer({ value: 0 }, incrementByAmount(4));
      expect(state).toEqual({ value: 4 });
    });

    it('does not modify the state when incrementAsync is pending', () => {
      const action = { type: incrementAsync.pending };
      const state = reducer({ value: 0 }, action);
      expect(state).toEqual({ value: 0 });
    });

    it('adds the payload to the value when incrementAsync is fulfilled', () => {
      const action = { type: incrementAsync.fulfilled, payload: 4 };
      const state = reducer({ value: 2 }, action);
      expect(state).toEqual({ value: 6 });
    });
  });

  describe('thunks', () => {
    it('incrementAsync', async () => {
      const dispatch = jest.fn();
      const getState = () => ({ counter: { value: 0 } });
      const amount = 4;
      const thunk = incrementAsync(amount);
      await thunk(dispatch, getState, null);

      // Check the api has been called with the correct arguments
      expect(fakeAsyncCall).toHaveBeenCalledWith(amount);

      // dispatch should be called twice - once for pending, once for resolved.
      expect(dispatch).toHaveBeenCalledTimes(2);

      // The first dispatch should have the correct type
      expect(dispatch.mock.calls[0]).toMatchObject([
        {
          type: incrementAsync.pending().type,
        },
      ]);

      // The second dispatch should have the correct payload and type
      expect(dispatch.mock.calls[1]).toMatchObject([
        {
          payload: amount,
          type: incrementAsync.fulfilled().type,
        },
      ]);
    });
  });

  describe('selectors', () => {
    it('returns the current value of the counter', () => {
      const count = selectCount({ counter: { value: 7 } });
      expect(count).toEqual(7);
    });
  });
});
