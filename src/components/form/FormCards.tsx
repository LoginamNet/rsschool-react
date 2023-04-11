import React from 'react';
import { useSelector } from 'react-redux';
import './FormCards.css';

import { SingleFormCard } from './FormCard';

import { RootState } from 'store';

export function FormCards() {
  const cards = useSelector((state: RootState) => state.form.value.cards);

  const formCards = cards.map((item, key) => (
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

  return <div className="formCardsContainer">{formCards}</div>;
}
