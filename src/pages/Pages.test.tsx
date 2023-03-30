import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { About } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';
import { BrowserRouter } from 'react-router-dom';
import { Form } from 'pages/Form';

afterEach(cleanup);

describe('Pages tests', function () {
  test('should render about page', () => {
    render(<About />);

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Some info about us!');
  });

  test('should render 404 page', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Oops!');
  });

  test('should render form page', () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );

    const header = screen.getByRole('form');
    expect(header).toBeInTheDocument();
  });
});
