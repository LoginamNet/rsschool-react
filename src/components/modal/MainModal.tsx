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
      role="mainmodalback"
    >
      <div className={`mainModal ${props.isModalOpen && 'mainModalOpen'}`}>
        <div className="mainModalData">
          <div
            className="mainModalImage"
            style={{
              backgroundImage: `url(${props.modalCard && props.modalCard.urls.regular})`,
              boxShadow: `5px 5px 0 0 ${props.modalCard && props.modalCard.color}`,
            }}
          ></div>
          <div className="mainModalInfo">
            <h2 className="mainModalHeader">
              {props.modalCard && props.modalCard.user.name.toUpperCase()}
            </h2>
            <span className="mainModalLocation">
              {props.modalCard && (props.modalCard.user.location || 'Unknown location')}
            </span>
            <span className="mainModalSize">
              Size (W/H):{' '}
              {props.modalCard && `${props.modalCard.width}px / ${props.modalCard.height}px`}
            </span>
            <span className="mainModalDate">
              Date:{' '}
              {props.modalCard &&
                props.modalCard.created_at.slice(0, 10).split('-').reverse().join('-')}
            </span>
            <span className="mainModalLikes">
              Likes: {props.modalCard && props.modalCard.likes}
            </span>
            <span className="mainModalDescription">
              About:{' '}
              {props.modalCard &&
                (props.modalCard.description ||
                  `Author doesn't provide any description for that photo. Be free to use your imagination!`)}
            </span>
            <a
              className="mainModalLink"
              href={props.modalCard && props.modalCard.urls.raw}
              target="_blank"
              rel="noreferrer"
            >
              Open full size in new window
            </a>
          </div>
        </div>
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
