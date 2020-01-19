import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from './counterSlice';
import styles from './counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <p className={styles.container}>
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
    </p>
  );
}
