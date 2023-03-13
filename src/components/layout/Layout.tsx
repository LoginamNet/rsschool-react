import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>2023</footer>
    </>
  );
}
