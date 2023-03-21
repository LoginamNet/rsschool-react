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
      selectedValue: 'steel',
      textAreaValue: '',
      radioValue: 'left',
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
    this.setState({ selectedValue: 'steel', textAreaValue: '', radioValue: 'left' });
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
          URL.createObjectURL(this.fileInput.current.files[0]),
      };

      this.props.updateCards(card);
      (event.target as HTMLFormElement).reset();
      this.clearForm();
    }
  };

  render(): React.ReactNode {
    return (
      <div className="form">
        <div className="formImage"></div>
        <form className="formProps" onSubmit={this.handleSubmit}>
          <span className="formTitle">Let`s pick up the watch!</span>
          <div className="formContainer nameDateContainer">
            <label className="nameLabel">
              <span className="formHeader">Enter your name:</span>
              <input
                type="text"
                placeholder="Print your awesome name there!"
                ref={this.nameInput}
              />
              <span
                className="formInvalidText"
                style={{ opacity: !this.state.isNameValid ? '1' : '0' }}
              >
                *Please, enter your name above!
              </span>
            </label>
            <label className="dateLabel">
              <span className="formHeader">Сhoose your date of birth:</span>
              <input type="date" ref={this.dateInput} />
              <span
                className="formInvalidText"
                style={{ opacity: !this.state.isDateValid ? '1' : '0' }}
              >
                *Everybody has a birthday!
              </span>
            </label>
          </div>
          <div className="formContainer">
            <div className="checkSelectContainer">
              <span className="formHeader">Features:</span>
              <label className="checkLabel">
                Water protection:
                <input type="checkbox" ref={this.checkInput} />
              </label>
              <label className="selectLabel">
                Material:
                <select value={this.state.selectedValue} onChange={this.handleSelect}>
                  <option value="steel">Steel</option>
                  <option value="plastic">Plastic</option>
                  <option value="gold">Gold</option>
                  <option value="carbon">Carbon</option>
                </select>
              </label>
            </div>
            <div className="radioContainer">
              <span className="formHeader">Choose your main hand:</span>
              <label className="radioLabel">
                Left hand:
                <input
                  type="radio"
                  name="radio"
                  value="left"
                  onChange={this.handleRadio}
                  checked={this.state.radioValue === `left`}
                />
              </label>
              <label className="radioLabel">
                Right hand:
                <input
                  type="radio"
                  name="radio"
                  value="right"
                  onChange={this.handleRadio}
                  checked={this.state.radioValue === `right`}
                />
              </label>
            </div>
          </div>
          <div className="formContainer radioTextAreaContainer">
            <label className="fileLabel">
              <div className="fileContainer">
                <span className="formHeader">Photo:</span>
                <input type="file" accept="image/*" ref={this.fileInput} />
                <span
                  className="formInvalidText"
                  style={{ opacity: !this.state.isFileValid ? '1' : '0' }}
                >
                  *Just a photo, nothint to afraid there!
                </span>
              </div>
            </label>
            <div className="textareaContainer">
              <span className="formHeader">About yourself</span>
              <textarea
                className="textarea"
                value={this.state.textAreaValue}
                placeholder="Describe yourself! The more strange details, the more interesting the watch!"
                onChange={this.handleTextArea}
              />
              <span
                className="formInvalidText"
                style={{ opacity: !this.state.isTextAreaValid ? '1' : '0' }}
              >
                *You are interresting! Tell us your story!
              </span>
            </div>
          </div>
          <input className="formSubmit" type="submit" value="IT`S ABOUT TIME!" />
        </form>
      </div>
    );
  }
}
