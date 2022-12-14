/* eslint-disable react/prop-types */
import React from 'react';
import { screen, render, act, waitFor, fireEvent } from '@testing-library/react';
import MutationObserver from 'mutation-observer';
import { Provider } from 'react-redux';
import Users from './Users';
import store from '../../store/index';

global.MutationObserver = MutationObserver;

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
describe('<Users />', () => {
  beforeEach(async () => {
    await act(async () => render(<Users />, { wrapper: Wrapper }));
    act(() => {
      jest.useFakeTimers();
      jest.advanceTimersByTime(10000);
    });
  });
  it('should display users with their managers', async () => {
    await waitFor(() => expect(screen.queryAllByRole('button', { name: /Manager/i })).toBeTruthy());
    waitFor(() => fireEvent.click(screen.getByRole('button', { name: /Manager/i })));
  });
});
