import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  const [title, setTitle] = useState(location.pathname);

  const handleTitleUpdate = () => {
    return title === '/'
      ? 'HOME'
      : title === '/about'
      ? 'ABOUT US'
      : title === '/form'
      ? 'FORM'
      : '404';
  };

  return (
    <header role="header">
      <div className="headerContainer">
        <span className="headerTitle" role="headerTitle">
          {handleTitleUpdate()}
        </span>
        <nav className="headerMenu">
          <li className="headerMenuItem" onClick={() => setTitle(location.pathname)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="headerMenuItem" onClick={() => setTitle(location.pathname)}>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li className="headerMenuItem" onClick={() => setTitle(location.pathname)}>
            <NavLink to="/form">Form</NavLink>
          </li>
        </nav>
      </div>
    </header>
  );
}
