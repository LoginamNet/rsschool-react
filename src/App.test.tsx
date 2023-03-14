import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { Search } from 'components/search/Search';
import ReactDOM from 'react-dom';


test("should render root without crashing", () => {
  waitFor(() => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index");
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

test('renders learn react link', () => {
  render(<Search />);
});
