import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from '../../app/store';
import { Counter } from './Counter';

describe('Counter component', () => {
  const produceComponent = () =>
    render(
      <Provider store={createStore()}>
        <Counter />
      </Provider>
    );

  afterEach(() => {
    cleanup();
  });

  test('renders the counter component', () => {
    produceComponent();
    expect(screen.getByText(/Add Amount/i)).toBeInTheDocument();
  });

  test('increments the counter', () => {
    produceComponent();
    userEvent.click(screen.getByLabelText(/increment value/i));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('decrements the counter', () => {
    produceComponent();
    expect(screen.getByText('0')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText(/decrement value/i));
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  test('add by amount', () => {
    produceComponent();
    userEvent.click(screen.getByText(/add amount/i));
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('add async', async () => {
    produceComponent();
    userEvent.click(screen.getByText(/add async/i));
    await screen.findByText('2');
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('add if odd', () => {
    produceComponent();
    userEvent.click(screen.getByText(/add if odd/i));
    expect(screen.getByText('0')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText(/increment value/i));
    userEvent.click(screen.getByText(/add if odd/i));
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
