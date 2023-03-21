import React from 'react';

import { FormCard as ComponentProps } from 'pages/Form';

export class SingleFormCard extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="cardContainer" role="card">
        <div className="cardImage">{this.props.file}</div>
        <div className="cardDefinition">
          <span className="cardName">{this.props.name}</span>
          <span className="cardDate">{this.props.date}</span>
          <span className="cardChecked">{this.props.checked}</span>
          <span className="cardDescription">{this.props.text}</span>
        </div>
        <span className="cardRating">{this.props.radio}</span>
      </div>
    );
  }
}
