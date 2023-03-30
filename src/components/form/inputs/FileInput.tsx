import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export class FileInput extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <label className="fileLabel">
        <div className="fileContainer">
          <span className="formHeader">Photo:</span>
          <input
            className="fileInput"
            type="file"
            accept="image/*"
            ref={this.props.input}
            role="fileinput"
          />
          <span className="formInvalidText" style={{ opacity: !this.props.isValid ? '1' : '0' }}>
            *Just a photo, nothint to afraid there!
          </span>
        </div>
      </label>
    );
  }
}
