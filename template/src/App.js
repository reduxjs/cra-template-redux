import React from 'react';
import { Route, Routes } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import logo from './assets/spacedev.png';
import Counter from './features/counter/Counter';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.self}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <React.Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route exact path="/" element={<Counter />} />
          </Routes>
        </React.Suspense>
        <p className={classes.hint}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span className={classes.hint}>Learn </span>
          <a
            className={classes.link}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            React
          </a>
          <span className={classes.hint}>, </span>
          <a
            className={classes.link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux
          </a>
          <span className={classes.hint}>, </span>
          <a
            className={classes.link}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span className={classes.hint}> and </span>
          <a
            className={classes.link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  self: {
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
  },
  logo: {
    width: '40vmin',
    pointerEvents: 'none',
    animation: `$logoFloat infinite 3s ${theme.transitions.easing.easeInOut}`,
  },
  header: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.spacing(1.5),
  },
  link: {
    color: theme.palette.text.primary,
  },
  hint: {
    color: theme.palette.text.hint,
  },
  '@keyframes logoFloat': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: `translateY(${theme.spacing(1)}px)`,
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    logo: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(4),
    },
  },
}));

export default App;
