import React, { ChangeEvent } from 'react';
import './Form.css';

import { FormCard } from 'pages/Form';

type ComponentProps = {
  updateCards: (card: FormCard) => void;
};

type ComponentState = {
  selectedValue: string;
  textAreaValue: string;
  radioValue: string;
  isFileValid: boolean;
  isNameValid: boolean;
  isDateValid: boolean;
  isTextAreaValid: boolean;
  isFormVadid: boolean;
};

export class CardForm extends React.Component<ComponentProps, ComponentState> {
  nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  dateInput: React.RefObject<HTMLInputElement> = React.createRef();
  checkInput: React.RefObject<HTMLInputElement> = React.createRef();
  fileInput: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      selectedValue: 'coconut',
      textAreaValue: '',
      radioValue: 'First',
      isFileValid: true,
      isNameValid: true,
      isDateValid: true,
      isTextAreaValid: true,
      isFormVadid: true,
    };
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

  handleFileValidation = async () => {
    this.fileInput.current?.files?.length === 0
      ? this.setState({ isFileValid: false })
      : this.setState({ isFileValid: true });
  };

  handleNameValidation = async () => {
    this.nameInput.current?.value === ''
      ? this.setState({ isNameValid: false })
      : this.setState({ isNameValid: true });
  };

  handleDateValidation = async () => {
    this.dateInput.current?.value === ''
      ? this.setState({ isDateValid: false })
      : this.setState({ isDateValid: true });
  };

  handleTextAreaValidation = async () => {
    this.state.textAreaValue === ''
      ? this.setState({ isTextAreaValid: false })
      : this.setState({ isTextAreaValid: true });
  };

  handleFormValidation = async () => {
    await this.handleFileValidation();
    await this.handleNameValidation();
    await this.handleDateValidation();
    await this.handleTextAreaValidation();

    if (
      !this.state.isFileValid ||
      !this.state.isNameValid ||
      !this.state.isDateValid ||
      !this.state.isTextAreaValid
    ) {
      this.setState({ isFormVadid: false });
    } else {
      this.setState({ isFormVadid: true });
    }
  };

  clearForm = () => {
    this.setState({ selectedValue: 'coconut', textAreaValue: '', radioValue: 'First' });
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await this.handleFormValidation();

    if (this.state.isFormVadid) {
      const card = {
        name: this.nameInput.current?.value as string,
        date: this.dateInput.current?.value as string,
        checked: this.checkInput.current?.checked as boolean,
        selected: this.state.selectedValue,
        radio: this.state.radioValue,
        text: this.state.textAreaValue,
        file:
          this.fileInput.current !== null &&
          this.fileInput.current.files !== null &&
          (this.fileInput.current.files[0].name as string),
      };

      this.props.updateCards(card);
      (event.target as HTMLFormElement).reset();
      this.clearForm();
    }
  };

  render(): React.ReactNode {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="file" ref={this.fileInput} />
        <span>{!this.state.isFileValid && 'UPLOAD AN IMAGE!'}</span>
        <label>
          NAME:
          <input type="text" ref={this.nameInput} />
          <span>{!this.state.isNameValid && 'ENTER YOUR NAME!'}</span>
        </label>
        <label>
          DATE:
          <input type="date" ref={this.dateInput} />
          <span>{!this.state.isDateValid && 'PLEASE, CHOOSE DATE!'}</span>
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
        <span>{!this.state.isTextAreaValid && 'PRINT SOME TEST FOR DESCRIPTION!'}</span>
        <input type="submit" value="SEND" />
      </form>
    );
  }
}
