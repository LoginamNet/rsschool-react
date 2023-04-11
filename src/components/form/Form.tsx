import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setCards, setModal } from 'reducers/form.reducer';
import './Form.css';

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

export function CardForm() {
  const dispatch = useDispatch();

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

    dispatch(setCards(card));
    dispatch(setModal(true));
  };

  return (
    <form
      className="formProps"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
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
