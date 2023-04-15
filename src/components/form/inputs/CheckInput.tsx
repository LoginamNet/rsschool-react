import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormInputs } from '../Form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
};

export function CheckInput(props: ComponentProps) {
  return (
    <label className="checkLabel">
      Water protection:
      <input
        className="checkInput"
        type="checkbox"
        {...props.register('check')}
        role="checkinput"
      />
    </label>
  );
}
