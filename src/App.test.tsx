import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitFor } from '@testing-library/react';

import App from './App';

describe('Common tests', function () {
  test('should render root without crashing', () => {
    waitFor(() => {
      const div = document.createElement('div');
      div.id = 'root';
      document.body.appendChild(div);
      require('./index');
      expect(ReactDOM.render).toHaveBeenCalledWith(div);
    });
  });
});

describe('App elements tests', function () {
  test('should render app without crashing', async () => {
    render(<App />);
  });
});
