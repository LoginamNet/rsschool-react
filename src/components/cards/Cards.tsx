import React from 'react';
import './Cards.css';

import { Card } from './Card';
import { MainCard } from 'pages/Main';

type ComponentProps = {
  cards: MainCard[];
  openModal: () => void;
  getCurrentModalCard: (card: MainCard) => void;
};

export function Cards(props: ComponentProps) {
  const cards = props.cards.map((card, key) => (
    <Card
      key={key}
      card={card}
      openModal={props.openModal}
      getCurrentModalCard={props.getCurrentModalCard}
    />
  ));

  return <div className="cardsContainer">{cards}</div>;
}
