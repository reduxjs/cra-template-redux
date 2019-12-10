import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "./ducks/counter";

function App() {
  const count = useSelector(selectors.selectCount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Redux
        </a>
        <p className="App-counter">
          <button
            className="App-counter-button"
            aria-label="Increment value"
            onClick={() => dispatch(actions.increment())}
          >
            +
          </button>
          <div className="App-counter-value">{count}</div>
          <button
            className="App-counter-button"
            aria-label="Decrement value"
            onClick={() => dispatch(actions.decrement())}
          >
            -
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
