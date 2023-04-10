import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';

import App from './App';

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
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should render app without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    render(<App />);

    const header = screen.getByRole('header');
    const main = screen.getByRole('main');
    const footer = screen.getByRole('footer');

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test('should update Header title', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('link')[1]);
    expect(screen.getByRole('headerTitle')).toHaveTextContent('ABOUT US');

    fireEvent.click(screen.getAllByRole('link')[2]);
    expect(screen.getByRole('headerTitle')).toHaveTextContent('FORM');
  });
});
