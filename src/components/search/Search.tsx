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

  useEffect(() => {
    setInput(localStorage.getItem('search') || '');
    props.setSearch(input);

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
      />
      <button className="searchButton" onClick={() => props.setSearch(input)}>
        FIND!
      </button>
    </div>
  );
}
