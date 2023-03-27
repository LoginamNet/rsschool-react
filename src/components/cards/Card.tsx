import React from 'react';

type ComponentProps = {
  brand: string;
  category?: string;
  description: string;
  discountPercentage?: number;
  id: number;
  price?: number;
  rating: number;
  stock?: number;
  thumbnail: string;
  title: string;
};

export function Card(props: ComponentProps) {
  return (
    <div className="cardContainer" role="card">
      <div className="cardImage" style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
      <div className="cardDefinition">
        <span className="cardName">{props.title}</span>
        <span className="cardBrand">{props.brand}</span>
        <span className="cardDescription">{props.description}</span>
      </div>
      <span className="cardRating">{props.rating}</span>
      <button className="cardButton">Order now</button>
    </div>
  );
}
