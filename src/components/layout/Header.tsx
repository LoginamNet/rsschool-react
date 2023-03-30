import React from 'react';
import { NavLink } from 'react-router-dom';

type ComponentProps = {
  children?: React.ReactNode;
};

type ComponentState = {
  title: string;
};

export class Header extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { title: location.pathname };
  }

  updateTitle = () => {
    this.setState({ title: location.pathname });
  };

  render(): React.ReactNode {
    return (
      <header role="header">
        <div className="headerContainer">
          <span className="headerTitle" role="headerTitle">
            {this.state.title === '/'
              ? 'HOME'
              : this.state.title === '/about'
              ? 'ABOUT US'
              : this.state.title === '/form'
              ? 'FORM'
              : '404'}
          </span>
          <nav className="headerMenu">
            <li className="headerMenuItem" onClick={this.updateTitle}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="headerMenuItem" onClick={this.updateTitle}>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li className="headerMenuItem" onClick={this.updateTitle}>
              <NavLink to="/form">Form</NavLink>
            </li>
          </nav>
        </div>
      </header>
    );
  }
}
