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

export class Card extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="cardContainer">
        <div
          className="cardImage"
          style={{ backgroundImage: `url(${this.props.thumbnail})` }}
        ></div>
        <div className="cardDefinition">
          <span className="cardName">{this.props.title}</span>
          <span className="cardBrand">{this.props.brand}</span>
          <span className="cardDescription">{this.props.description}</span>
        </div>
        <span className="cardRating">{this.props.rating}</span>
        <button className="cardButton">Order now</button>
      </div>
    );
  }
}
