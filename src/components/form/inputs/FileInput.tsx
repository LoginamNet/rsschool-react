import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormInputs } from '../Form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export function FileInput(props: ComponentProps) {
  return (
    <label className="fileLabel">
      <div className="fileContainer">
        <span className="formHeader">Photo:</span>
        <input
          className="fileInput"
          type="file"
          accept="image/*"
          {...props.register('file', { required: true })}
          role="fileinput"
        />
        {props.errors.file && (
          <span className="formInvalidText">*Just a photo, nothing to afraid there!</span>
        )}
      </div>
    </label>
  );
}
