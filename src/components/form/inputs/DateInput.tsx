import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormInputs } from '../Form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export function DateInput(props: ComponentProps) {
  return (
    <label className="dateLabel">
      <span className="formHeader">Сhoose your date of birth:</span>
      <input
        className="dateInput"
        type="date"
        {...props.register('date', { required: '*Everybody has a birthday!' })}
        role="dateinput"
      />
      {props.errors.date && <span className="formInvalidText">{props.errors.date.message}</span>}
    </label>
  );
}
