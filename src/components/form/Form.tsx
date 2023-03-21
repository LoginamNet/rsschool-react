import React, { ChangeEvent } from 'react';
import './Form.css';

type ComponentProps = {
  children?: React.ReactNode;
};

type ComponentState = {
  selectedValue: string;
  textAreaValue: string;
  radioValue: string;
};

export class CardForm extends React.Component<ComponentProps, ComponentState> {
  nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  dateInput: React.RefObject<HTMLInputElement> = React.createRef();
  checkInput: React.RefObject<HTMLInputElement> = React.createRef();
  fileInput: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: ComponentProps) {
    super(props);
    this.state = { selectedValue: 'coconut', textAreaValue: '', radioValue: 'First' };
  }

  handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedValue: event.target.value });
  };

  handleRadio = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ radioValue: event.target.value });
  };

  handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ textAreaValue: event.target.value });
  };

  clearForm = () => {
    this.setState({ selectedValue: 'coconut', textAreaValue: '', radioValue: 'First' });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      `
      Name: ${this.nameInput.current?.value}
      Date: ${this.dateInput.current?.value}
      Is Checked: ${this.checkInput.current?.checked}
      Selected: ${this.state.selectedValue}
      Radio: ${this.state.radioValue}
      Text: ${this.state.textAreaValue}
      Selected file ${
        this.fileInput.current !== null &&
        this.fileInput.current.files !== null &&
        this.fileInput.current.files[0].name
      }
      `
    );
    (event.target as HTMLFormElement).reset();
    this.clearForm();
  };

  render(): React.ReactNode {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="file" ref={this.fileInput} />
        <label>
          NAME:
          <input type="text" ref={this.nameInput} />
        </label>
        <label>
          DATE:
          <input type="date" ref={this.dateInput} />
        </label>
        <label>
          IS CHECKED?:
          <input type="checkbox" ref={this.checkInput} />
        </label>
        <select value={this.state.selectedValue} onChange={this.handleSelect}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <label>
          First:
          <input
            type="radio"
            name="radio"
            value="First"
            onChange={this.handleRadio}
            checked={this.state.radioValue === `First`}
          />
        </label>
        <label>
          Second:
          <input
            type="radio"
            name="radio"
            value="Second"
            onChange={this.handleRadio}
            checked={this.state.radioValue === `Second`}
          />
        </label>
        <label>
          Third:
          <input
            type="radio"
            name="radio"
            value="Third"
            onChange={this.handleRadio}
            checked={this.state.radioValue === `Third`}
          />
        </label>
        <textarea
          value={this.state.textAreaValue}
          placeholder="Print some text!"
          onChange={this.handleTextArea}
        />
        <input type="submit" value="SEND" />
      </form>
    );
  }
}
