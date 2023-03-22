import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { Card } from 'components/cards/Card';
import { cardsData } from 'common/data';
import { Cards } from 'components/cards/Cards';

afterEach(cleanup);

describe('Common tests', function () {
  test('should render root without crashing', () => {
    waitFor(() => {
      const div = document.createElement('div');
      div.id = 'root';
      document.body.appendChild(div);
      require('./index');
      expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
    });
  });
});

describe('App elements tests', function () {
  test('should render app without crashing', () => {
    render(<App />);

    const header = screen.getByRole('header');
    const main = screen.getByRole('main');
    const footer = screen.getByRole('footer');

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test('should update search input value', () => {
    render(<App />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    userEvent.type(input, '23');
    expect(input.value).toBe('23');
  });

  test('should update Header title', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('link')[1]);
    expect(screen.getByRole('headerTitle')).toHaveTextContent('ABOUT US');
  });
});
