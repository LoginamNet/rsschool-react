import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLInputElement>;
};

export class CheckInput extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <label className="checkLabel">
        Water protection:
        <input className="checkInput" type="checkbox" ref={this.props.input} role="checkinput" />
      </label>
    );
  }
}
