import React from 'react';

type ComponentProps = {
  id: string;
  thumbnail: string;
  likes: number;
  setModal: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      cardId: string;
    }>
  >;
};

export function Card(props: ComponentProps) {
  return (
    <div className="cardContainer" role="card">
      <div className="cardImage" style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
      <span className="cardRating">{props.likes}</span>
      <div
        className="cardMessageContainer"
        onClick={() => props.setModal({ isOpen: true, cardId: props.id })}
      >
        <span className="cardMessage">Click for info</span>
      </div>
    </div>
  );
}
