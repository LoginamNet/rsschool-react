import React from 'react';
import './FormModal.css';

type ComponentProps = {
  closeModal: () => void;
  isModalOpen: boolean;
};

export function FormModal(props: ComponentProps) {
  return (
    <div className={`formModalContainer ${props.isModalOpen && 'formModalContainerOpen'}`}>
      <div className={`formModal ${props.isModalOpen && 'formModalOpen'}`}>
        <h2 className="modalHeader">Submited!</h2>
        <span className="modalText">Thanks for your data! It will help us to do some things!</span>
        <button className="modalButton" onClick={() => props.closeModal()} role="formmodalclose">
          Close & add more
        </button>
      </div>
    </div>
  );
}
