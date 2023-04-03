import React from 'react';
import { Card } from './Card';
import './Cards.css';

import { MainCard } from 'pages/Main';

type ComponentProps = {
  images: MainCard[];
  setModal: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      cardId: string;
    }>
  >;
};

export function Cards(props: ComponentProps) {
  const cards = props.images.map((item, key) => (
    <Card
      key={key}
      id={item.id}
      thumbnail={item.urls.thumb}
      likes={item.likes}
      setModal={props.setModal}
    />
  ));

  return <div className="cardsContainer">{cards}</div>;
}
