import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export function DateInput(props: ComponentProps) {
  return (
    <label className="dateLabel">
      <span className="formHeader">Сhoose your date of birth:</span>
      <input className="dateInput" type="date" ref={props.input} role="dateinput" />
      <span className="formInvalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Everybody has a birthday!
      </span>
    </label>
  );
}
