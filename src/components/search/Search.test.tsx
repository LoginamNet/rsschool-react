import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Search } from './Search';

describe('Search tests', function () {
  test('should render Search and press find button', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const button = screen.getByRole('searchbutton');
    expect(button).toBeInTheDocument();
    act(() => userEvent.click(button));
  });

  test('should update Search input value', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    act(() => userEvent.type(input, '23'));
    expect(input.value).toBe('23');
  });

  test('should set search by pressing Enter key', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    act(() => fireEvent.submit(input));
  });
});
