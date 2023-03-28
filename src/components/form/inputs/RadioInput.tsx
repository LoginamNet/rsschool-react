import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormInputs } from 'pages/Form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
};

export function RadioInput(props: ComponentProps) {
  return (
    <div className="radioContainer">
      <span className="formHeader">Choose your main hand:</span>
      <label className="radioLabel">
        Left hand:
        <input
          type="radio"
          value="left"
          {...props.register('radio')}
          role="radioinput1"
          defaultChecked
        />
      </label>
      <label className="radioLabel">
        Right hand:
        <input type="radio" value="right" {...props.register('radio')} role="radioinput2" />
      </label>
    </div>
  );
}
