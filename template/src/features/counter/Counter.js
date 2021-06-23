import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

const Counter = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={classes.self}>
      <div className={classes.row}>
        <Button
          color="primary"
          variant="contained"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          -
        </Button>
        <span className={classes.value}>{count}</span>
        <Button
          color="primary"
          variant="contained"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          +
        </Button>
      </div>
      <div className={classes.row}>
        <TextField
          className={classes.textbox}
          label={t('setIncrementAmount')}
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => dispatch(incrementByAmount(incrementValue))}>
          {t('addAmount')}
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => dispatch(incrementAsync(incrementValue))}>
          {t('addAsync')}
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          {t('addIfOdd')}
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  self: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& > button': {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(1),
    },

    '&:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  textbox: {
    marginRight: theme.spacing(1),
  },
  value: {
    fontSize: theme.spacing(9.75),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(0.25),
    color: theme.palette.text.primary,
    fontFamily: `'Courier New', Courier, monospace`,
  },
  [theme.breakpoints.down('sm')]: {
    textbox: {
      width: '100%',
      marginRight: 'unset',
      marginBottom: theme.spacing(1),
    },
    row: {
      flexDirection: 'column',
      width: '100%',

      '& > button': {
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(1),
        width: '100%',
      },
    },
  },
}));

export default Counter;
