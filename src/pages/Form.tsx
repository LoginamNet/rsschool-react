import React from 'react';

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

type FormState = {
  cards: FormCard[];
  isModalOpen: boolean;
};

type ComponentProps = {
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
};

export class Form extends React.Component<ComponentProps, FormState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { cards: [], isModalOpen: false };
  }

  componentDidMount(): void {
    this.props.setHeaderTitle('FORM');
  }

  updateCards = (card: FormCard) => {
    this.setState({ cards: [...this.state.cards, card], isModalOpen: true });
  };

  closeFormModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="page formPage">
        <div className="form">
          <div className="formImage"></div>
          <CardForm updateCards={this.updateCards} />
          <FormModal closeModal={this.closeFormModal} isOpen={this.state.isModalOpen} />
        </div>
        <div>
          {this.state.cards.length > 0 ? (
            <FormCards cards={this.state.cards} />
          ) : (
            <h3 style={{ textAlign: 'center' }}>NO CARDS FOR NOW!</h3>
          )}
        </div>
      </div>
    );
  }
}
