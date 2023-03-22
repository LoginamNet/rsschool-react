import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export class NameInput extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <label className="nameLabel">
        <span className="formHeader">Enter your name:</span>
        <input
          className="nameInput"
          type="text"
          placeholder="Print your awesome name there!"
          ref={this.props.input}
          role="nameinput"
        />
        <span className="formInvalidText" style={{ opacity: !this.props.isValid ? '1' : '0' }}>
          *Please, enter your name above! (Сapital letter first - Alex)
        </span>
      </label>
    );
  }
}
