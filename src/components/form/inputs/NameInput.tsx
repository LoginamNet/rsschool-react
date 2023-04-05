import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormInputs } from 'pages/Form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export function NameInput(props: ComponentProps) {
  return (
    <label className="nameLabel">
      <span className="formHeader">Enter your name:</span>
      <input
        className="nameInput"
        type="text"
        placeholder="Print your awesome name there!"
        {...props.register('name', {
          required: '*Please, enter your name above!',
          validate: (value) => {
            return value[0] === value[0].toUpperCase() || '*Сapital letter first - Alex';
          },
        })}
        role="nameinput"
      />
      {props.errors.name && <span className="formInvalidText">{props.errors.name.message}</span>}
    </label>
  );
}
