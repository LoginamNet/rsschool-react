import React from 'react';
import './Form.css';

import { FormCard } from 'pages/Form';
import { NameInput } from './inputs/NameInput';
import { DateInput } from './inputs/DateInput';
import { CheckInput } from './inputs/CheckInput';
import { SelectInput } from './inputs/SelectInput';
import { RadioInput } from './inputs/RadioInput';
import { TextareaInput } from './inputs/TextareaInput';
import { FileInput } from './inputs/FileInput';

type ComponentProps = {
  updateCards: (card: FormCard) => void;
};

type ComponentState = {
  isFileValid: boolean;
  isNameValid: boolean;
  isDateValid: boolean;
  isTextAreaValid: boolean;
  isFormVadid: boolean;
};

export class CardForm extends React.Component<ComponentProps, ComponentState> {
  nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  dateInput: React.RefObject<HTMLInputElement> = React.createRef();
  selectInput: React.RefObject<HTMLSelectElement> = React.createRef();
  checkInput: React.RefObject<HTMLInputElement> = React.createRef();
  radioInputLeft: React.RefObject<HTMLInputElement> = React.createRef();
  radioInputRight: React.RefObject<HTMLInputElement> = React.createRef();
  textareaInput: React.RefObject<HTMLTextAreaElement> = React.createRef();
  fileInput: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      isFileValid: true,
      isNameValid: true,
      isDateValid: true,
      isTextAreaValid: true,
      isFormVadid: true,
    };
  }

  handleFileValidation = async () => {
    this.fileInput.current?.files?.length === 0
      ? this.setState({ isFileValid: false })
      : this.setState({ isFileValid: true });
  };

  handleNameValidation = async () => {
    this.nameInput.current?.value === '' ||
    this.nameInput.current?.value[0] !== this.nameInput.current?.value[0].toUpperCase()
      ? this.setState({ isNameValid: false })
      : this.setState({ isNameValid: true });
  };

  handleDateValidation = async () => {
    this.dateInput.current?.value === ''
      ? this.setState({ isDateValid: false })
      : this.setState({ isDateValid: true });
  };

  handleTextAreaValidation = async () => {
    this.textareaInput.current?.value === ''
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

  addNewCard = () => {
    const card = {
      name: this.nameInput.current?.value as string,
      date: this.dateInput.current?.value as string,
      checked: this.checkInput.current?.checked as boolean,
      selected: this.selectInput.current?.value as string,
      radio: this.radioInputLeft.current?.checked
        ? (this.radioInputLeft.current?.value as string)
        : (this.radioInputRight.current?.value as string),
      text: this.textareaInput.current?.value as string,
      file:
        this.fileInput.current !== null &&
        this.fileInput.current.files !== null &&
        URL.createObjectURL(this.fileInput.current.files[0]),
    };

    this.props.updateCards(card);
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await this.handleFormValidation();

    if (this.state.isFormVadid) {
      this.addNewCard();
      (event.target as HTMLFormElement).reset();
    }
  };

  render(): React.ReactNode {
    return (
      <form className="formProps" onSubmit={this.handleSubmit} role="form">
        <span className="formTitle">Let`s pick up the watch!</span>
        <div className="formContainer nameDateContainer">
          <NameInput input={this.nameInput} isValid={this.state.isNameValid} />
          <DateInput input={this.dateInput} isValid={this.state.isDateValid} />
        </div>
        <div className="formContainer checkSelectRadioContainer">
          <div className="checkSelectContainer">
            <span className="formHeader">Features:</span>
            <CheckInput input={this.checkInput} />
            <SelectInput input={this.selectInput} />
          </div>
          <RadioInput input1={this.radioInputLeft} input2={this.radioInputRight} />
        </div>
        <div className="formContainer radioTextAreaContainer">
          <FileInput input={this.fileInput} isValid={this.state.isFileValid} />
          <TextareaInput input={this.textareaInput} isValid={this.state.isTextAreaValid} />
        </div>
        <input className="formSubmit" type="submit" value="IT`S ABOUT TIME!" role="formsubmit" />
      </form>
    );
  }
}
