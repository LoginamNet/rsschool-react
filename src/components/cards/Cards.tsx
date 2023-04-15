import React from 'react';
import './Cards.css';

import { Card } from './Card';
import { MainCard } from 'pages/Main';

type ComponentProps = {
  cards: MainCard[];
};

export function Cards(props: ComponentProps) {
  const cards = props.cards.map((card, key) => <Card key={key} card={card} />);

  return <div className="cardsContainer">{cards}</div>;
}
