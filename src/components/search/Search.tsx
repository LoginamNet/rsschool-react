import React, { ChangeEvent, useEffect, useState } from 'react';
import './Search.css';

type ComponentProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function Search(props: ComponentProps) {
  const [input, setInput] = useState('');

  const handleInputEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    localStorage.setItem('search', event.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && props.setSearch(input);
  };

  useEffect(() => {
    setInput(localStorage.getItem('search') || '');

    return () => {
      localStorage.setItem('search', localStorage.getItem('search') || '');
    };
  }, []);

  return (
    <div className="searchContainer">
      <input
        className="searchInput"
        type="text"
        placeholder="Print something!"
        defaultValue={input}
        onInput={handleInputEvent}
        onKeyDown={handleEnterPress}
      />
      <button className="searchButton" onClick={() => props.setSearch(input)}>
        FIND!
      </button>
    </div>
  );
}
