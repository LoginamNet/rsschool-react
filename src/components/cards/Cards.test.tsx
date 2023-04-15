import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Card } from 'components/cards/Card';
import { Cards } from 'components/cards/Cards';
import { cards } from 'common/data';

afterEach(cleanup);

describe('Cards tests', function () {
  test('should render Card', () => {
    render(
      <Provider store={store}>
        <Card card={cards[0]} />
      </Provider>
    );

    const button = screen.getByRole('mainopenmodal');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });

  test('should render Cards', () => {
    render(
      <Provider store={store}>
        <Cards cards={cards} />
      </Provider>
    );

    const pageCards = screen.getAllByRole('card');
    expect(pageCards).toHaveLength(cards.length);
  });
});
