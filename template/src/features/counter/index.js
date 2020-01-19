import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from './counterSlice';
import './counter.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <p className="Counter-container">
      <button
        className="Counter-button"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span className="Counter-value">{count}</span>
      <button
        className="Counter-button"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </p>
  );
}
