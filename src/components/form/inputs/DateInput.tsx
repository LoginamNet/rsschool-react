import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export class DateInput extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <label className="dateLabel">
        <span className="formHeader">Сhoose your date of birth:</span>
        <input className="dateInput" type="date" ref={this.props.input} role="dateinput" />
        <span className="formInvalidText" style={{ opacity: !this.props.isValid ? '1' : '0' }}>
          *Everybody has a birthday!
        </span>
      </label>
    );
  }
}
