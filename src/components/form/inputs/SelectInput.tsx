import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLSelectElement>;
};

export class SelectInput extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <label className="selectLabel">
        Material:
        <select className="selectInput" ref={this.props.input}>
          <option value="Steel">Steel</option>
          <option value="Plastic">Plastic</option>
          <option value="Gold">Gold</option>
          <option value="Carbon">Carbon</option>
        </select>
      </label>
    );
  }
}
