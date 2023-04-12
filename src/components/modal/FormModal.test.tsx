import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store';

import { FormModal } from './FormModal';

afterEach(cleanup);

describe('Form modal test', function () {
  test('Form modal can be rendered and closed', async () => {
    render(
      <Provider store={store}>
        <FormModal />
      </Provider>
    );

    const button = screen.getByRole('formmodalclose');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});
