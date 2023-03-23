import React from 'react';

type ComponentProps = {
  input: React.RefObject<HTMLTextAreaElement>;
  isValid: boolean;
};

export class TextareaInput extends React.Component<ComponentProps> {
  constructor(props: ComponentProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="textareaContainer">
        <span className="formHeader">About yourself</span>
        <textarea
          className="textarea"
          placeholder="Describe yourself! The more strange details, the more interesting the watch!"
          ref={this.props.input}
          role="textareainput"
        />
        <span className="formInvalidText" style={{ opacity: !this.props.isValid ? '1' : '0' }}>
          *You are interresting! Tell us your story!
        </span>
      </div>
    );
  }
}
