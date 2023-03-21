import React from 'react';
import { SingleFormCard } from './FormCard';
import './FormCards.css';

import { FormState } from 'pages/Form';

export function FormCards(props: FormState) {
  const cards = props.cards.map((item, key) => (
    <SingleFormCard
      key={key}
      name={item.name}
      date={item.date}
      checked={item.checked}
      radio={item.radio}
      text={item.text}
      selected={item.selected}
      file={item.file}
    />
  ));

  return <div className="formCardsContainer">{cards}</div>;
}
