import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store';

// import { FormCards } from './FormCards';
import { CardForm } from './Form';

window.URL.createObjectURL = jest.fn();

afterEach(cleanup);

describe('Form tests', function () {
  window.URL.createObjectURL = jest.fn();

  test('Form must be submitted', async () => {
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    await act(async () => fireEvent.submit(screen.getByRole('form')));
  });

  test('file can be loaded to file input', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    const input = screen.getByRole('fileinput') as HTMLInputElement;
    userEvent.upload(input, file);

    await act(async () => fireEvent.submit(screen.getByRole('form')));

    expect(input.files).toHaveLength(1);
  });

  test('should update name input value', async () => {
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    const input = screen.getByRole('nameinput') as HTMLInputElement;
    userEvent.type(input, 'Name');

    expect(input.value).toBe('Name');
    await act(async () => fireEvent.submit(screen.getByRole('form')));
  });

  test('should update name input value to low letter and check error', async () => {
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    const input = screen.getByRole('nameinput') as HTMLInputElement;
    userEvent.type(input, 'smallname');

    expect(input.value).toBe('smallname');
    await act(async () => fireEvent.submit(screen.getByRole('form')));

    expect(screen.getByText('*Сapital letter first - Alex')).toBeInTheDocument();
  });

  test('should update date input value', async () => {
    const testValue = '2019-03-29';
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    const input = screen.getByRole('dateinput') as HTMLInputElement;
    fireEvent.change(input, { target: { value: testValue } });

    expect(input.value).toEqual(testValue);
    await act(async () => fireEvent.submit(screen.getByRole('form')));
  });

  test('should update textarea input value', async () => {
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    const input = screen.getByRole('textareainput') as HTMLTextAreaElement;
    userEvent.type(input, '23');

    expect(input.value).toBe('23');
    await act(async () => fireEvent.submit(screen.getByRole('form')));
  });

  test('should check the checkbox input', () => {
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    const input = screen.getByRole('checkinput') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input).not.toBeChecked();
    fireEvent.click(input);

    expect(input).toBeChecked();
  });

  test('should switch the radio inputs', () => {
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    const input1 = screen.getByRole('radioinput1') as HTMLInputElement;
    const input2 = screen.getByRole('radioinput2') as HTMLInputElement;
    expect(input1).toBeChecked();
    fireEvent.click(input2);

    expect(input1).not.toBeChecked();
    expect(input2).toBeChecked();
  });

  test('test posibilyty to submit after data set', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const testValue = '2019-03-29';
    render(
      <Provider store={store}>
        <CardForm />
      </Provider>
    );

    const inputFile = screen.getByRole('fileinput') as HTMLInputElement;
    userEvent.upload(inputFile, file);

    const inputName = screen.getByRole('nameinput') as HTMLInputElement;
    userEvent.type(inputName, 'Test');

    const inputDate = screen.getByRole('dateinput') as HTMLInputElement;
    fireEvent.change(inputDate, { target: { value: testValue } });

    const inputText = screen.getByRole('textareainput') as HTMLTextAreaElement;
    userEvent.type(inputText, '23');

    await act(async () => fireEvent.submit(screen.getByRole('form')));
  });
});

// describe('FormCards tests', function () {
//   test('should render FormCard', () => {
//     render(<FormCards cards={testCards} />);

//     expect(screen.getByText(testCards[0].name)).toBeInTheDocument();
//     expect(screen.getByText(testCards[1].name)).toBeInTheDocument();
//     expect(screen.getByText('Waterproof')).toBeInTheDocument();
//     expect(screen.getByText('Not waterproof')).toBeInTheDocument();
//   });

//   test('should render FormCards', () => {
//     render(<FormCards cards={testCards} />);

//     const cards = screen.getAllByRole('formcard');
//     expect(cards).toHaveLength(testCards.length);
//   });
// });
