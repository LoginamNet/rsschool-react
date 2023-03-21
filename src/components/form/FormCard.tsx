import React from 'react';

import { FormCard as ComponentProps } from 'pages/Form';

export class SingleFormCard extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="formCardContainer" role="formcard">
        <div className="formCardImage" style={{ backgroundImage: `url(${this.props.file})` }}></div>
        <span className="formCardDateHand">
          {this.props.date} / {this.props.radio.toUpperCase() + ' HAND'}
        </span>
        <div className="formCardDefinition">
          <li className="formCardWater">{this.props.checked ? 'Waterproof' : 'Not waterproof'}</li>
          <li className="formCardMaterial">{this.props.selected}</li>
          <span className="formCardDescription">{this.props.text}</span>
        </div>
        <span className="formCardName">{this.props.name}</span>
      </div>
    );
  }
}
