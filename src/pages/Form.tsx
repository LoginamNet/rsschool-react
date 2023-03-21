import { CardForm } from 'components/form/Form';
import { FormCards } from 'components/form/FormCards';
import React from 'react';

export type FormCard = {
  name: string;
  date: string;
  checked: boolean;
  selected: string;
  radio: string;
  text: string;
  file: string | false;
};

export type FormState = {
  cards: FormCard[];
};

type ComponentProps = {
  children?: React.ReactNode;
};

export class Form extends React.Component<ComponentProps, FormState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { cards: [] };
  }

  updateCards = (card: FormCard) => {
    this.setState({ cards: [...this.state.cards, card] });
  };

  render() {
    return (
      <div className="page formPage">
        <CardForm updateCards={this.updateCards} />
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
