import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
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
