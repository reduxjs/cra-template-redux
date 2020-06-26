/**
 * @jest-environment jest-environment-jsdom-sixteen
 */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { Counter } from './Counter';

test('Counter', async () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  const value = screen.getByTitle('Count is');
  const decrement = screen.getByRole('button', { name: 'Decrement value' });
  const increment = screen.getByRole('button', { name: 'Increment value' });
  const incrementAmount = screen.getByRole('textbox', {
    name: 'Set increment amount',
  });
  const incrementByAmount = screen.getByRole('button', {
    name: 'Increment value by amount',
  });
  const incrementAsync = screen.getByRole('button', {
    name: 'Increment value by amount asynchronously',
  });

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
