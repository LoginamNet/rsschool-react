import React, { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from 'store';

import { CardForm } from 'components/form/Form';
import { FormCards } from 'components/form/FormCards';
import { FormModal } from 'components/modal/FormModal';

export type FormCard = {
  name: string;
  date: string;
  checked: boolean;
  selected: string;
  radio: string;
  text: string;
  file: string | false;
};

export type FormInputs = {
  name: string;
  date: string;
  check: boolean;
  select: string;
  radio: string;
  file: FileList;
  text: string;
};

export function Form() {
  const [cards, setCards] = useState<FormCard[]>([]);
  const [isModalOpen, setModal] = useState(false);

  const dispatch = useDispatch();

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

    setCards((cards) => [...cards, card]);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: 'FORM' }));
  });

  return (
    <div className="page formPage">
      <div className="form">
        <div className="formImage"></div>
        <CardForm onSubmit={onSubmit} />
        <FormModal closeModal={closeModal} isModalOpen={isModalOpen} />
      </div>
      <div>
        {cards.length > 0 ? (
          <FormCards cards={cards} />
        ) : (
          <h3 style={{ textAlign: 'center' }}>NO CARDS FOR NOW!</h3>
        )}
      </div>
    </div>
  );
}
