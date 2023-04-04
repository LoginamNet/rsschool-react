import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, waitFor, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { cardsData } from 'common/data';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(cardsData[0]),
  })
) as jest.Mock;

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

// describe('App elements tests', function () {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
//   test('should render app without crashing', async () => {
//     await act(async () => render(<App />));

//     const header = screen.getByRole('header');
//     const main = screen.getByRole('main');
//     const footer = screen.getByRole('footer');

//     expect(header).toBeInTheDocument();
//     expect(main).toBeInTheDocument();
//     expect(footer).toBeInTheDocument();
//   });

//   test('should update search input value', () => {
//     render(<App />);

//     const input = screen.getByRole('textbox') as HTMLInputElement;
//     userEvent.type(input, '23');
//     expect(input.value).toBe('23');
//   });

//   test('should update Header title', () => {
//     render(<App />);

//     fireEvent.click(screen.getAllByRole('link')[1]);
//     expect(screen.getByRole('headerTitle')).toHaveTextContent('ABOUT US');

//     fireEvent.click(screen.getAllByRole('link')[2]);
//     expect(screen.getByRole('headerTitle')).toHaveTextContent('FORM');
//   });
// });
