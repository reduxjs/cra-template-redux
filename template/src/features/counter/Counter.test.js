/**
 * @jest-environment jest-environment-jsdom-sixteen
 */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { Counter } from './Counter';

// To use the mock module, you must explicitly call jest.mock here
// https://jestjs.io/docs/en/manual-mocks
jest.mock('./api');

test('can render the Counter and have the store be updated by actions', async () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  const value = screen.getByRole('status', { name: 'Counter value' });
  const decrement = screen.getByRole('button', { name: 'Decrement value' });
  const increment = screen.getByRole('button', { name: 'Increment value' });
  const incrementAmount = screen.getByRole('textbox', {
    name: 'Set increment amount',
  });
  const incrementByAmount = screen.getByRole('button', {
    name: 'Increment value by amount',
  });
  const incrementAsync = screen.getByRole('button', {
    name: 'Increment value by random amount asynchronously',
  });

  // Initial render
  expect(value).toHaveTextContent('0');
  expect(incrementAmount).toHaveValue('2');

  // Updates
  userEvent.click(increment);
  expect(value).toHaveTextContent('1');

  userEvent.type(incrementAmount, '{backspace}4');
  expect(incrementAmount).toHaveValue('4');
  userEvent.click(incrementByAmount);
  expect(value).toHaveTextContent('5');

  userEvent.click(decrement);
  expect(value).toHaveTextContent('4');

  userEvent.click(incrementAsync);
  await waitFor(() => expect(value).toHaveTextContent('8'));
});
