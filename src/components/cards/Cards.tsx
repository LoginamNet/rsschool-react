import React from 'react';
import { Card } from './Card';
import { cardsData } from 'common/data';
import './Cards.css';

export function Cards() {
  const cards = cardsData.map((item, key) => (
    <Card
      key={key}
      id={item.id}
      title={item.title}
      brand={item.brand}
      description={item.description}
      rating={item.rating}
      thumbnail={item.thumbnail}
    />
  ));

  return <div className="cardsContainer">{cards}</div>;
}
