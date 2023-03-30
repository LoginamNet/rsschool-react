import React from 'react';
import './FormModal.css';

type ComponentProps = {
  closeModal: () => void;
  isOpen: boolean;
};

export class FormModal extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={`formModalContainer ${this.props.isOpen && 'formModalContainerOpen'}`}>
        <div className={`formModal ${this.props.isOpen && 'formModalOpen'}`}>
          <h2 className="modalHeader">Submited!</h2>
          <span className="modalText">
            Thanks for your data! It will help us to do some things!
          </span>
          <button className="modalButton" onClick={this.props.closeModal}>
            Close & add more
          </button>
        </div>
      </div>
    );
  }
}
