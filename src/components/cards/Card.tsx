import React from 'react';

import { MainCard } from 'pages/Main';

type ComponentProps = {
  card: MainCard;
  openModal: () => void;
  getCardID: (id: string) => void;
};

export function Card(props: ComponentProps) {
  return (
    <div className="cardContainer" role="card">
      <div className="cardImage" style={{ backgroundImage: `url(${props.card.urls.thumb})` }}></div>
      <span className="cardRating">💜{props.card.likes}</span>
      <div
        className="cardMessageContainer"
        onClick={() => {
          props.getCardID(props.card.id);
          props.openModal();
        }}
        role="mainopenmodal"
      >
        <span className="cardMessage">Click for info</span>
      </div>
    </div>
  );
}
