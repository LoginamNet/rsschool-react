import React from 'react';

type ComponentProps = {
  input1: React.RefObject<HTMLInputElement>;
  input2: React.RefObject<HTMLInputElement>;
};

export class RadioInput extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="radioContainer">
        <span className="formHeader">Choose your main hand:</span>
        <label className="radioLabel">
          Left hand:
          <input
            type="radio"
            name="radio"
            value="left"
            ref={this.props.input1}
            role="radioinput1"
            defaultChecked
          />
        </label>
        <label className="radioLabel">
          Right hand:
          <input
            type="radio"
            name="radio"
            value="right"
            ref={this.props.input2}
            role="radioinput2"
          />
        </label>
      </div>
    );
  }
}
