import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormInputs } from '../Form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export function TextareaInput(props: ComponentProps) {
  return (
    <div className="textareaContainer">
      <span className="formHeader">About yourself</span>
      <textarea
        className="textarea"
        placeholder="Describe yourself! The more strange details, the more interesting the watch!"
        {...props.register('text', { required: true })}
        role="textareainput"
      />
      {props.errors.text && (
        <span className="formInvalidText">*You are interresting! Tell us your story!</span>
      )}
    </div>
  );
}
