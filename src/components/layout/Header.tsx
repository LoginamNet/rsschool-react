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

  setHeaderTitle = () => {
    let title: string;

    switch (true) {
      case this.state.title === '/':
        title = 'HOME';
        break;
      case this.state.title === '/about':
        title = 'ABOUT US';
        break;
      default:
        title = '404';
        break;
    }

    return title;
  };

  render(): React.ReactNode {
    return (
      <header>
        <div className="headerContainer">
          <span className="headerTitle" role="headerTitle">
            {this.setHeaderTitle()}
          </span>
          <nav className="headerMenu">
            <li className="headerMenuItem" onClick={this.updateTitle}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="headerMenuItem" onClick={this.updateTitle}>
              <NavLink to="/about">About us</NavLink>
            </li>
          </nav>
        </div>
      </header>
    );
  }
}
