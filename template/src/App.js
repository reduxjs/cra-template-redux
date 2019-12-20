import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from './features/counter';

function App() {
  const count = useSelector(selectors.selectCount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-counter">
          <button
            className="App-counter-button"
            aria-label="Increment value"
            onClick={() => dispatch(actions.increment())}
          >
            +
          </button>
          <span className="App-counter-value">{count}</span>
          <button
            className="App-counter-button"
            aria-label="Decrement value"
            onClick={() => dispatch(actions.decrement())}
          >
            -
          </button>
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          Learn
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>,
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>,
          and
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
