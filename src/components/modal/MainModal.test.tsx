import React from 'react';
import { screen, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'common/render';

import { Main } from 'pages/Main';
import { MainModal } from './MainModal';

afterEach(cleanup);

describe('Main modal test', function () {
  test('Main modal can be rendered', async () => {
    renderWithProviders(<Main />);

    const cards = await screen.findAllByText(/Click for info/i);
    await act(async () => userEvent.click(cards[0]));

    const contry = await screen.findByText(/Wiesbaden, Germany/i);
    expect(contry).toBeInTheDocument();
  });

  test('Main modal can be rendered and closed by button', async () => {
    renderWithProviders(<Main />);

    const cards = await screen.findAllByText(/Click for info/i);
    await act(async () => userEvent.click(cards[0]));

    const closeBtn = await screen.findByRole('mainmodalclose');
    await act(async () => userEvent.click(closeBtn));
  });

  test('Main modal can be rendered and closed by background', async () => {
    renderWithProviders(<MainModal />);

    const background = await screen.findByRole('mainmodalback');
    await act(async () => userEvent.click(background));
  });
});
