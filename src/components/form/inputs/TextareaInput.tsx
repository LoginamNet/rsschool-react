import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLTextAreaElement>;
  isValid: boolean;
};

export function TextareaInput(props: ComponentProps) {
  return (
    <div className="textareaContainer">
      <span className="formHeader">About yourself</span>
      <textarea
        className="textarea"
        placeholder="Describe yourself! The more strange details, the more interesting the watch!"
        ref={props.input}
        role="textareainput"
      />
      <span className="formInvalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *You are interresting! Tell us your story!
      </span>
    </div>
  );
}
