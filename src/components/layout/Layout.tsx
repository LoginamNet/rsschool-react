import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
      </header>

      <main>
        <div className="mainContainer">
          <Outlet />
        </div>
      </main>

      <footer>2023</footer>
    </>
  );
}
