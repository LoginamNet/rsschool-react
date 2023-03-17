import React from 'react';
import '../../common/constants.css';
import './Layout.css';

import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export function Layout() {
  return (
    <>
      <Header />

      <main>
        <div className="mainContainer">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}
