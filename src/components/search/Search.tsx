import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from 'reducers/search.reducer';
import './Search.css';

import { RootState } from 'store';

export function Search() {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.value.search);

  return (
    <div className="searchContainer">
      <input
        className="searchInput"
        type="text"
        placeholder="Print something!"
        defaultValue={search !== 'photo' ? search : ''}
        onInput={(event: ChangeEvent<HTMLInputElement>) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter') {
            dispatch(setSearch({ search: input }));
          }
        }}
      />
      <button
        className="searchButton"
        onClick={() => dispatch(setSearch({ search: input }))}
        role="searchbutton"
      >
        FIND!
      </button>
    </div>
  );
}
