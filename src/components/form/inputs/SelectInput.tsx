import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormInputs } from '../Form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
};

export function SelectInput(props: ComponentProps) {
  return (
    <label className="selectLabel">
      Material:
      <select className="selectInput" {...props.register('select')}>
        <option value="Steel">Steel</option>
        <option value="Plastic">Plastic</option>
        <option value="Gold">Gold</option>
        <option value="Carbon">Carbon</option>
      </select>
    </label>
  );
}
