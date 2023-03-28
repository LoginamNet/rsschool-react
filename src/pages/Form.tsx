import React, { useEffect, useState } from 'react';

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

type ComponentProps = {
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
};

export function Form(props: ComponentProps) {
  const [cards, setCards] = useState<FormCard[]>([]);
  const [isModalOpen, setModal] = useState(false);

  useEffect(() => {
    props.setHeaderTitle('FORM');
  });

  return (
    <div className="page formPage">
      <div className="form">
        <div className="formImage"></div>
        <CardForm setCards={setCards} setModal={setModal} />
        <FormModal setModal={setModal} isModalOpen={isModalOpen} />
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
