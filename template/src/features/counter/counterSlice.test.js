import reducer, {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';

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
  });

  describe('thunks', () => {
    it('incrementAsync', async () => {
      const dispatch = jest.fn();
      const getState = () => ({ counter: { value: 0 } });
      const thunk = incrementAsync(4);
      await thunk(dispatch, getState, null);

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).nthCalledWith(1, {
        meta: {
          arg: 4,
          requestId: expect.any(String),
        },
        payload: undefined,
        type: 'counter/incrementAsync/pending',
      });
      expect(dispatch).nthCalledWith(2, incrementByAmount(4));
      expect(dispatch).nthCalledWith(3, {
        meta: {
          arg: 4,
          requestId: expect.any(String),
        },
        payload: undefined,
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
