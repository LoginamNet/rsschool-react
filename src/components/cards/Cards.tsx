import React from 'react';
import { Card } from './Card';
import './Cards.css';

import { Photo } from 'pages/Main';

type ComponentProps = {
  images: Photo[];
};

export function Cards(props: ComponentProps) {
  const cards = props.images.map((item, key) => (
    <Card
      key={key}
      // id={item.id}
      // title={item.title}
      // brand={item.brand}
      // description={item.description}
      // rating={item.rating}
      thumbnail={item.urls.thumb}
      likes={item.likes}
    />
  ));

  return <div className="cardsContainer">{cards}</div>;
}
