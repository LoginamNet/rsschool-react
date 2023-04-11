import React from 'react';

import { FormCard as ComponentProps } from 'reducers/form.reducer';

export function SingleFormCard(props: ComponentProps) {
  return (
    <div className="formCardContainer" role="formcard">
      <div className="formCardImage" style={{ backgroundImage: `url(${props.file})` }}></div>
      <span className="formCardDateHand">
        {props.date} / {props.radio.toUpperCase() + ' HAND'}
      </span>
      <div className="formCardDefinition">
        <li className="formCardWater">{props.checked ? 'Waterproof' : 'Not waterproof'}</li>
        <li className="formCardMaterial">{props.selected}</li>
        <span className="formCardDescription">{props.text}</span>
      </div>
      <span className="formCardName">{props.name}</span>
    </div>
  );
}
