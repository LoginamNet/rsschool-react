import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, waitFor, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from './Search';

const setSearch = jest.fn();

describe('Search tests', function () {
  test('should render Search and press find button', async () => {
    render(<Search setSearch={setSearch} />);

    const button = screen.getByRole('searchbutton');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });

  test('should update Search input value', () => {
    render(<Search setSearch={setSearch} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    act(() => userEvent.type(input, '23'));
    expect(input.value).toBe('23');
  });

  test('should set search by pressing Enter key', () => {
    render(<Search setSearch={setSearch} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });
  });

  //   test('should update Header title', () => {
  //     render(<App />);
  //     fireEvent.click(screen.getAllByRole('link')[1]);
  //     expect(screen.getByRole('headerTitle')).toHaveTextContent('ABOUT US');

  //     fireEvent.click(screen.getAllByRole('link')[2]);
  //     expect(screen.getByRole('headerTitle')).toHaveTextContent('FORM');
  //   });
});
