import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormInputs } from '../Form';

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
          required: true,
          validate: (value) => value[0] === value[0].toUpperCase(),
        })}
        role="nameinput"
      />
      {props.errors.name && (
        <span className="formInvalidText">
          *Please, enter your name above! (Сapital letter first - Alex)
        </span>
      )}
    </label>
  );
}
