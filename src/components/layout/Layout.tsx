import React from 'react';
import '../../common/constants.css';
import './Layout.css';

import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

type ComponentProps = {
  headerTitle: string;
};

export function Layout(props: ComponentProps) {
  return (
    <>
      <Header headerTitle={props.headerTitle} />

      <main>
        <div className="mainContainer">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}
