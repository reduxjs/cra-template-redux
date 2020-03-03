import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
  isLoading,
  incrementByAmountAsync
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  const [incrementAmountAsync, setIncrementAmountAsync] = useState(2);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(
              incrementByAmount({ amount: Number(incrementAmount) || 0 })
            )
          }
        >
          Add Amount
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set async increment amount"
          value={incrementAmountAsync}
          onChange={e => setIncrementAmountAsync(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(
              incrementByAmountAsync({
                amount: Number(incrementAmountAsync) || 0
              })
            )
          }
        >
          {!loading && "Add Amount Async"}
          {loading && "loading"}
        </button>
      </div>
    </div>
  );
}
