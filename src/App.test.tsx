import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App elements tests', function () {
  test('should render app without crashing', async () => {
    render(<App />);
  });
});
