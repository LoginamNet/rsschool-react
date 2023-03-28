import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export function FileInput(props: ComponentProps) {
  return (
    <label className="fileLabel">
      <div className="fileContainer">
        <span className="formHeader">Photo:</span>
        <input
          className="fileInput"
          type="file"
          accept="image/*"
          ref={props.input}
          role="fileinput"
        />
        <span className="formInvalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
          *Just a photo, nothint to afraid there!
        </span>
      </div>
    </label>
  );
}
