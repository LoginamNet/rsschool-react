import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Form.css';

import { FormCard } from 'pages/Form';
import { NameInput } from './inputs/NameInput';
import { DateInput } from './inputs/DateInput';
import { CheckInput } from './inputs/CheckInput';
import { SelectInput } from './inputs/SelectInput';
import { RadioInput } from './inputs/RadioInput';
import { TextareaInput } from './inputs/TextareaInput';
import { FileInput } from './inputs/FileInput';

export type FormInputs = {
  name: string;
  date: string;
  check: boolean;
  select: string;
  radio: string;
  file: FileList;
  text: string;
};

type ComponentProps = {
  setCards: React.Dispatch<React.SetStateAction<FormCard[]>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
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

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const card = {
      name: data.name,
      date: data.date,
      checked: data.check,
      selected: data.select,
      radio: data.radio,
      text: data.text,
      file: URL.createObjectURL(data.file[0]),
    };

    props.setCards((cards) => [...cards, card]);
    props.setModal(true);
    reset();
  };

  return (
    <form className="formProps" onSubmit={handleSubmit(onSubmit)} role="form">
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
