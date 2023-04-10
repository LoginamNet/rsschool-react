import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

import { RootState } from 'store';

export function Header() {
  const headerTitle = useSelector((state: RootState) => state.headerTitle.value.headerTitle);

  return (
    <header role="header">
      <div className="headerContainer">
        <span className="headerTitle" role="headerTitle">
          {headerTitle}
        </span>
        <nav className="headerMenu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/form">Form</NavLink>
        </nav>
      </div>
    </header>
  );
}
