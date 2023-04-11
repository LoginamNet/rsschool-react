import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from 'reducers/form.reducer';
import './FormModal.css';

import { RootState } from 'store';

export function FormModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.form.value.isModalOpen);

  return (
    <div className={`formModalContainer ${isModalOpen && 'formModalContainerOpen'}`}>
      <div className={`formModal ${isModalOpen && 'formModalOpen'}`}>
        <h2 className="formModalHeader">Submited!</h2>
        <span className="formModalText">
          Thanks for your data! It will help us to do some things!
        </span>
        <button
          className="formModalButton"
          onClick={() => dispatch(setModal(false))}
          role="formmodalclose"
        >
          Close & add more
        </button>
      </div>
    </div>
  );
}
