import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { About } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';
import { BrowserRouter } from 'react-router-dom';
import { Card } from 'components/cards/Card';
import { cardsData } from 'common/data';
import { Cards } from 'components/cards/Cards';

afterEach(cleanup);

describe('Common tests', function () {
  test('should render root without crashing', () => {
    waitFor(() => {
      const div = document.createElement('div');
      div.id = 'root';
      document.body.appendChild(div);
      require('./index');
      expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
    });
  });
});

describe('App elements tests', function () {
  test('should render app without crashing', () => {
    render(<App />);

    const header = screen.getByRole('header');
    const main = screen.getByRole('main');
    const footer = screen.getByRole('footer');

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test('should update search input value', () => {
    render(<App />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    userEvent.type(input, '23');
    expect(input.value).toBe('23');
  });

  test('should update Header title', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('link')[1]);
    expect(screen.getByRole('headerTitle')).toHaveTextContent('ABOUT US');
  });
});

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
});

describe('Cards tests', function () {
  test('should render Card', () => {
    render(
      <Card
        id={cardsData[0].id}
        title={cardsData[0].title}
        brand={cardsData[0].brand}
        description={cardsData[0].description}
        rating={cardsData[0].rating}
        thumbnail={cardsData[0].thumbnail}
      />
    );

    expect(screen.getByText(cardsData[0].title)).toBeInTheDocument();
    expect(screen.getByText(cardsData[0].brand)).toBeInTheDocument();
    expect(screen.getByText(cardsData[0].description)).toBeInTheDocument();
  });

  test('should render Cards', () => {
    render(<Cards />);

    const cards = screen.getAllByRole('card');
    expect(cards).toHaveLength(cardsData.length);
  });
});
