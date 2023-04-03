import React from 'react';

import { MainCard } from 'pages/Main';

type ComponentProps = {
  card: MainCard;
  openModal: () => void;
  getCurrentModalCard: (card: MainCard) => void;
};

export function Card(props: ComponentProps) {
  return (
    <div className="cardContainer" role="card">
      <div className="cardImage" style={{ backgroundImage: `url(${props.card.urls.thumb})` }}></div>
      <span className="cardRating">{props.card.likes}</span>
      <div
        className="cardMessageContainer"
        onClick={() => {
          props.getCurrentModalCard(props.card);
          props.openModal();
        }}
      >
        <span className="cardMessage">Click for info</span>
      </div>
    </div>
  );
}
