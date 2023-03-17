import React, { ChangeEvent } from 'react';
import './Search.css';

type ComponentProps = {
  children?: React.ReactNode;
};

type ComponentState = {
  input: string;
};

export class Search extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { input: localStorage.getItem('search') || '' };
  }

  componentDidMount() {
    const storagedInput = localStorage.getItem('search');
    if (storagedInput) this.setState({ input: storagedInput });
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.input);
  }

  handleInputEvent = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value });
    localStorage.setItem('search', event.target.value);
  };

  render(): React.ReactNode {
    return (
      <div className="searchContainer">
        <input
          className="searchInput"
          type="text"
          placeholder="Print something!"
          defaultValue={this.state.input}
          onInput={this.handleInputEvent}
        />
        <button className="searchButton">FIND!</button>
      </div>
    );
  }
}
