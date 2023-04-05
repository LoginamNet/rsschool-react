import React from 'react';
import { render, screen, cleanup, act, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { Main } from './Main';
import { About } from 'pages/About';
import { Form } from 'pages/Form';
import { NotFoundPage } from 'pages/NotFound';
import { cards } from 'common/data';
import { ACCESS_KEY } from 'common/keys';

const setHeaderTitle = jest.fn();

async function testingFetch() {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=15&query=cat&client_id=${ACCESS_KEY}}`
  );
  const json = await data.json();

  return json;
}

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(cards),
    }) as Promise<Response>;
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

afterEach(cleanup);

describe('Pages tests', function () {
  test('should render main page', async () => {
    const json = await testingFetch();
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(3);

    await act(async () => render(<Main setHeaderTitle={setHeaderTitle} />));
  });

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
