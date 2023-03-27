import React from 'react';
import { NavLink } from 'react-router-dom';

type ComponentProps = {
  headerTitle: string;
};

export function Header(props: ComponentProps) {
  return (
    <header role="header">
      <div className="headerContainer">
        <span className="headerTitle" role="headerTitle">
          {props.headerTitle}
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
