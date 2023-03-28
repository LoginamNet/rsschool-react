import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export function NameInput(props: ComponentProps) {
  return (
    <label className="nameLabel">
      <span className="formHeader">Enter your name:</span>
      <input
        className="nameInput"
        type="text"
        placeholder="Print your awesome name there!"
        ref={props.input}
        role="nameinput"
      />
      <span className="formInvalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Please, enter your name above! (Сapital letter first - Alex)
      </span>
    </label>
  );
}
