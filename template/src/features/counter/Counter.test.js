/**
 * @jest-environment jest-environment-jsdom-sixteen
 */
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { Counter } from './Counter';

test('Counter', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  const value = getByTestId('counter-value');
  const decrement = getByTestId('counter-decrement');
  const increment = getByTestId('counter-increment');
  const incrementAmount = getByTestId('counter-increment-amount');
  const incrementByAmount = getByTestId('counter-increment-by-amount');
  const incrementAsync = getByTestId('counter-increment-async');

  // Initial render
  expect(value).toContainHTML('0');
  expect(incrementAmount).toHaveValue('2');

  // Updates
  fireEvent.click(increment);
  expect(value).toContainHTML('1');

  fireEvent.change(incrementAmount, { target: { value: '4' } });
  expect(incrementAmount).toHaveValue('4');
  fireEvent.click(incrementByAmount);
  expect(value).toContainHTML('5');

  fireEvent.click(decrement);
  expect(value).toContainHTML('4');

  fireEvent.click(incrementAsync);
  await waitFor(() => expect(value).toContainHTML('8'));
});
