import React from 'react';
import { useDispatch } from 'react-redux';
import { setID, setModalOpen } from 'reducers/modal.reducer';

import { MainCard } from 'pages/Main';

type ComponentProps = {
  card: MainCard;
};

export function Card(props: ComponentProps) {
  const dispatch = useDispatch();

  return (
    <div className="cardContainer" role="card">
      <div className="cardImage" style={{ backgroundImage: `url(${props.card.urls.thumb})` }}></div>
      <span className="cardRating">💜{props.card.likes}</span>
      <div
        className="cardMessageContainer"
        onClick={() => {
          dispatch(setModalOpen());
          dispatch(setID(props.card.id));
        }}
        role="mainopenmodal"
      >
        <span className="cardMessage">Click for info</span>
      </div>
    </div>
  );
}
