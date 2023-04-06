import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import { Loading } from './Loading';

afterEach(cleanup);

describe('Loading tests', function () {
  test('should render Loading', () => {
    render(<Loading />);

    expect(screen.getByText('Loading..')).toBeInTheDocument();
  });
});
