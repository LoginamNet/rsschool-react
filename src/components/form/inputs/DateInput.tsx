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
        {...props.register('date', { required: true })}
        role="dateinput"
      />
      {props.errors.date && <span className="formInvalidText">*Everybody has a birthday!</span>}
    </label>
  );
}
