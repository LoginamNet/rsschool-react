import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Card } from 'components/cards/Card';
import { Cards } from 'components/cards/Cards';
import { cards } from 'common/data';

const openModal = jest.fn();
const getCurrentModalCard = jest.fn();

afterEach(cleanup);

describe('Cards tests', function () {
  test('should render Card', () => {
    render(
      <Card card={cards[0]} openModal={openModal} getCurrentModalCard={getCurrentModalCard} />
    );

    const button = screen.getByRole('mainopenmodal');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });

  test('should render Cards', () => {
    render(<Cards cards={cards} openModal={openModal} getCurrentModalCard={getCurrentModalCard} />);

    const pageCards = screen.getAllByRole('card');
    expect(pageCards).toHaveLength(cards.length);
  });
});
