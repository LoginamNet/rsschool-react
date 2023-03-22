import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { FormCards } from './FormCards';
import userEvent from '@testing-library/user-event';
import { CardForm } from './Form';

const testCards = [
  {
    name: 'name1',
    date: 'date1',
    checked: true,
    selected: 'select1',
    radio: 'radio1',
    text: 'text1',
    file: 'file1',
  },
  {
    name: 'name2',
    date: 'date2',
    checked: false,
    selected: 'select2',
    radio: 'radio2',
    text: 'text2',
    file: 'file2',
  },
];

window.URL.createObjectURL = jest.fn();
const mockUpdate = jest.fn();

afterEach(cleanup);

describe('Form tests', function () {
  window.URL.createObjectURL = jest.fn();

  test('Form must be submitted', () => {
    render(<CardForm updateCards={mockUpdate} />);

    fireEvent.submit(screen.getByRole('form'));
  });

  test('file can be loaded to file input', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    render(<CardForm updateCards={mockUpdate} />);

    const input = screen.getByRole('fileinput') as HTMLInputElement;
    userEvent.upload(input, file);

    fireEvent.submit(screen.getByRole('form'));

    expect(input.files).toHaveLength(1);
  });

  test('should update name input value', () => {
    render(<CardForm updateCards={mockUpdate} />);

    const input = screen.getByRole('nameinput') as HTMLInputElement;
    userEvent.type(input, '23');
    fireEvent.submit(screen.getByRole('form'));

    expect(input.value).toBe('23');
  });

  test('should update date input value', () => {
    const testValue = '2019-03-29';
    render(<CardForm updateCards={mockUpdate} />);

    const input = screen.getByRole('dateinput') as HTMLInputElement;
    fireEvent.change(input, { target: { value: testValue } });
    fireEvent.submit(screen.getByRole('form'));

    expect(input.value).toEqual(testValue);
  });

  test('should update textarea input value', () => {
    render(<CardForm updateCards={mockUpdate} />);

    const input = screen.getByRole('textareainput') as HTMLTextAreaElement;
    userEvent.type(input, '23');
    fireEvent.submit(screen.getByRole('form'));

    expect(input.value).toBe('23');

    userEvent.type(input, '32');
    fireEvent.submit(screen.getByRole('form'));
  });

  test('should check the checkbox input', () => {
    render(<CardForm updateCards={mockUpdate} />);

    const input = screen.getByRole('checkinput') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input).not.toBeChecked();
    fireEvent.click(input);

    expect(input).toBeChecked();
  });

  test('should switch the radio inputs', () => {
    render(<CardForm updateCards={mockUpdate} />);

    const input1 = screen.getByRole('radioinput1') as HTMLInputElement;
    const input2 = screen.getByRole('radioinput2') as HTMLInputElement;
    expect(input1).toBeChecked();
    fireEvent.click(input2);

    expect(input1).not.toBeChecked();
    expect(input2).toBeChecked();
  });
});

describe('FormCards tests', function () {
  test('should render FormCard', () => {
    render(<FormCards cards={testCards} />);

    expect(screen.getByText(testCards[0].name)).toBeInTheDocument();
    expect(screen.getByText(testCards[1].name)).toBeInTheDocument();
    expect(screen.getByText('Waterproof')).toBeInTheDocument();
    expect(screen.getByText('Not waterproof')).toBeInTheDocument();
  });

  test('should render FormCards', () => {
    render(<FormCards cards={testCards} />);

    const cards = screen.getAllByRole('formcard');
    expect(cards).toHaveLength(testCards.length);
  });
});
