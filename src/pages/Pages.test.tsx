import React from 'react';
import { render, screen, cleanup, act, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store';
import { renderWithProviders } from 'common/render';
import { search } from 'common/data';

import { Main } from './Main';
import { About } from 'pages/About';
import { Form } from 'pages/Form';
import { NotFoundPage } from 'pages/NotFound';

afterEach(cleanup);

describe('Pages tests', function () {
  test('should render Main page with two test cards', async () => {
    renderWithProviders(<Main />);

    const cards = await screen.findAllByText(/Click for info/i);
    expect(cards.length).toEqual(search.results.length);
  });

  test('should render about page', () => {
    render(
      <Provider store={store}>
        <About />
      </Provider>
    );

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Some info about us!');
  });

  test('should render 404 page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      </Provider>
    );

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Oops!');
  });

  test('should render form page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );

    const header = screen.getByRole('form');
    expect(header).toBeInTheDocument();
  });

  test('should open and close modal on form page', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
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
