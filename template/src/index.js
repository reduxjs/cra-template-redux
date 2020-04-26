import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.backgroundColor};
    margin:0;
    min-height: 100vh;
  }
`;

const theme = {
  backgroundColor: '#F6F8FC',
  primary: '#8DC9BA',
  secondary: 'white',
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
