import React, { ChangeEvent, useEffect, useState } from 'react';
import './Search.css';

export function Search() {
  const [input, setInput] = useState('');

  const handleInputEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    localStorage.setItem('search', event.target.value);
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
      />
      <button className="searchButton">FIND!</button>
    </div>
  );
}
