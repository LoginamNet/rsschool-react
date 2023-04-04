import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
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
});
