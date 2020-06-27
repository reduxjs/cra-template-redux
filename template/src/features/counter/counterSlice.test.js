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
    it('decrement', () => {
      const state = reducer({ value: 4 }, decrement());
      expect(state).toEqual({ value: 3 });
    });

    it('increment', () => {
      const state = reducer({ value: 0 }, increment());
      expect(state).toEqual({ value: 1 });
    });

    it('incrementByAmount', () => {
      const state = reducer({ value: 0 }, incrementByAmount(4));
      expect(state).toEqual({ value: 4 });
    });

    it('incrementAsync.pending', () => {
      const action = { type: incrementAsync.pending };
      const state = reducer({ value: 0 }, action);
      expect(state).toEqual({ value: 0 });
    });

    it('incrementAsync.resolved', () => {
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

      expect(fakeAsyncCall).toHaveBeenCalledWith(amount);
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).nthCalledWith(1, {
        meta: {
          arg: amount,
          requestId: expect.any(String),
        },
        payload: undefined,
        type: 'counter/incrementAsync/pending',
      });
      expect(dispatch).nthCalledWith(2, {
        meta: {
          arg: amount,
          requestId: expect.any(String),
        },
        payload: amount,
        type: 'counter/incrementAsync/fulfilled',
      });
    });
  });

  describe('selectors', () => {
    it('selectCount', () => {
      const count = selectCount({ counter: { value: 7 } });
      expect(count).toEqual(7);
    });
  });
});
