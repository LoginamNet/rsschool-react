import React from 'react';
import { screen, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'common/render';

import { FormModal } from './FormModal';

const testCards = [
  {
    name: 'name1',
    date: 'date1',
    checked: true,
    selected: 'select1',
    radio: 'radio1',
    text: 'text1',
    file: 'file1',
  },
  {
    name: 'name2',
    date: 'date2',
    checked: false,
    selected: 'select2',
    radio: 'radio2',
    text: 'text2',
    file: 'file2',
  },
];

afterEach(cleanup);

describe('Form modal test', function () {
  test('Form modal can be rendered and closed', async () => {
    renderWithProviders(<FormModal />, {
      preloadedState: {
        form: { value: { cards: testCards, isModalOpen: true } },
      },
    });

    const button = screen.getByRole('formmodalclose');
    expect(button).toBeInTheDocument();
    await act(async () => userEvent.click(button));
  });
});
