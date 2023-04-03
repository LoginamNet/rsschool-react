import React from 'react';
import './MainModal.css';

import { MainCard } from 'pages/Main';

type ComponentProps = {
  closeModal: () => void;
  isModalOpen: boolean;
  modalCard: MainCard;
};

export function MainModal(props: ComponentProps) {
  return (
    <div
      className={`mainModalContainer ${props.isModalOpen && 'mainModalContainerOpen'}`}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        props.closeModal();
      }}
    >
      <div className={`mainModal ${props.isModalOpen && 'mainModalOpen'}`}>
        <h2 className="mainModalHeader">{props.modalCard && props.modalCard.likes}</h2>
        <button
          className="mainModalButton"
          onClick={() => props.closeModal()}
          role="mainmodalclose"
        >
          X
        </button>
      </div>
    </div>
  );
}
