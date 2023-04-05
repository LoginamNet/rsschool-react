import React, { ChangeEvent, useEffect, useState } from 'react';
import './Search.css';

type ComponentProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function Search(props: ComponentProps) {
  const [input, setInput] = useState('');

  const handleInputEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      localStorage.setItem('search', input);
      props.setSearch(input);
    }
  };

  const handleFindPress = () => {
    localStorage.setItem('search', input);
    props.setSearch(input);
  };

  useEffect(() => {
    setInput(localStorage.getItem('search') || '');
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
      <button className="searchButton" onClick={handleFindPress} role="searchbutton">
        FIND!
      </button>
    </div>
  );
}
