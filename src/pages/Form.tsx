import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTitle } from 'reducers/title.reducer';

import { CardForm } from 'components/form/Form';
import { FormCards } from 'components/form/FormCards';
import { FormModal } from 'components/modal/FormModal';

import { RootState } from 'store';

export function Form() {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.form.value.cards);

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: 'FORM' }));
  });

  return (
    <div className="page formPage">
      <div className="form">
        <div className="formImage"></div>
        <CardForm />
        <FormModal />
      </div>
      <div>
        {cards.length > 0 ? (
          <FormCards />
        ) : (
          <h3 style={{ textAlign: 'center' }}>NO CARDS FOR NOW!</h3>
        )}
      </div>
    </div>
  );
}
