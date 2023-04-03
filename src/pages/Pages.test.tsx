import React from 'react';
import { render, screen, cleanup, act, fireEvent } from '@testing-library/react';
import { About } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';
import { BrowserRouter } from 'react-router-dom';
import { Form } from 'pages/Form';
import userEvent from '@testing-library/user-event';

const setHeaderTitle = jest.fn();

afterEach(cleanup);

describe('Pages tests', function () {
  test('should render about page', () => {
    render(<About setHeaderTitle={setHeaderTitle} />);

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Some info about us!');
  });

  test('should render 404 page', () => {
    render(
      <BrowserRouter>
        <NotFoundPage setHeaderTitle={setHeaderTitle} />
      </BrowserRouter>
    );

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Oops!');
  });

  test('should render form page', () => {
    render(
      <BrowserRouter>
        <Form setHeaderTitle={setHeaderTitle} />
      </BrowserRouter>
    );

    const header = screen.getByRole('form');
    expect(header).toBeInTheDocument();
  });

  test('should open and close modal on form page', async () => {
    render(
      <BrowserRouter>
        <Form setHeaderTitle={setHeaderTitle} />
      </BrowserRouter>
    );

    const header = screen.getByRole('form');
    expect(header).toBeInTheDocument();

    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const testValue = '2019-03-29';

    const inputFile = screen.getByRole('fileinput') as HTMLInputElement;
    userEvent.upload(inputFile, file);

    const inputName = screen.getByRole('nameinput') as HTMLInputElement;
    userEvent.type(inputName, 'Test');

    const inputDate = screen.getByRole('dateinput') as HTMLInputElement;
    await act(async () => fireEvent.change(inputDate, { target: { value: testValue } }));

    const inputText = screen.getByRole('textareainput') as HTMLTextAreaElement;
    userEvent.type(inputText, '23');

    await act(async () => fireEvent.submit(screen.getByRole('form')));

    const button = screen.getByRole('formmodalclose');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
  });
});
