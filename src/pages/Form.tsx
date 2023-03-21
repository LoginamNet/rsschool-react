import { CardForm } from 'components/form/Form';
import { SingleFormCard } from 'components/form/FormCard';
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
          {this.state.cards.length > 0 && (
            <SingleFormCard
              name={this.state.cards[0].name}
              date={this.state.cards[0].date}
              checked={this.state.cards[0].checked}
              radio={this.state.cards[0].radio}
              text={this.state.cards[0].text}
              selected={this.state.cards[0].selected}
              file={this.state.cards[0].file}
            />
          )}
        </div>
      </div>
    );
  }
}
