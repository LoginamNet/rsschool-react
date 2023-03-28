import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormInputs } from 'pages/Form';

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
          {...props.register('file', { required: '*Just a photo, nothing to afraid there!' })}
          role="fileinput"
        />
        {props.errors.file && <span className="formInvalidText">{props.errors.file.message}</span>}
      </div>
    </label>
  );
}
