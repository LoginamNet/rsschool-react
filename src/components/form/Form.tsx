import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Form.css';

import { NameInput } from './inputs/NameInput';
import { DateInput } from './inputs/DateInput';
import { CheckInput } from './inputs/CheckInput';
import { SelectInput } from './inputs/SelectInput';
import { RadioInput } from './inputs/RadioInput';
import { TextareaInput } from './inputs/TextareaInput';
import { FileInput } from './inputs/FileInput';
import { FormInputs } from 'pages/Form';

type ComponentProps = {
  onSubmit: SubmitHandler<FormInputs>;
};

export function CardForm(props: ComponentProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  return (
    <form
      className="formProps"
      onSubmit={handleSubmit((data) => {
        props.onSubmit(data);
        reset();
      })}
      role="form"
    >
      <span className="formTitle">Let`s pick up the watch!</span>
      <div className="formContainer nameDateContainer">
        <NameInput register={register} errors={errors} />
        <DateInput register={register} errors={errors} />
      </div>
      <div className="formContainer checkSelectRadioContainer">
        <div className="checkSelectContainer">
          <span className="formHeader">Features:</span>
          <CheckInput register={register} />
          <SelectInput register={register} />
        </div>
        <RadioInput register={register} />
      </div>
      <div className="formContainer radioTextAreaContainer">
        <FileInput register={register} errors={errors} />
        <TextareaInput register={register} errors={errors} />
      </div>
      <input className="formSubmit" type="submit" value="IT`S ABOUT TIME!" role="formsubmit" />
    </form>
  );
}
