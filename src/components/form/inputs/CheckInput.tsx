import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLInputElement>;
};

export function CheckInput(props: ComponentProps) {
  return (
    <label className="checkLabel">
      Water protection:
      <input className="checkInput" type="checkbox" ref={props.input} role="checkinput" />
    </label>
  );
}
