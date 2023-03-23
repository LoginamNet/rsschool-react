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
          <option value="steel">Steel</option>
          <option value="plastic">Plastic</option>
          <option value="gold">Gold</option>
          <option value="carbon">Carbon</option>
        </select>
      </label>
    );
  }
}
