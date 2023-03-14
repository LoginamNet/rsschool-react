import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import { About } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';
import { BrowserRouter as Router} from 'react-router-dom';


test('should render root without crashing', () => {
  waitFor(() => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('./index');
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
  })
});

test('should render app without crashing', () => {
  render(<App />);

  const homeLink = screen.getByText(/Home/);
  const aboutLink = screen.getByText(/About us/);
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});

test('should render about page', () => {
  render(<About />);

  const header = screen.getByRole('heading');
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent('Some info about us!');
});

test('should render 404 page', () => {
  
  render(
    <Router>
      <NotFoundPage />
    </Router>
  );

  const header = screen.getByRole('heading');
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent('Oops!');
});