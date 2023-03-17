import React from 'react';
import { Search } from 'components/search/Search';
import { Cards } from 'components/cards/Cards';

export function Main() {
  return (
    <div className="page mainPage">
      <Search />
      <Cards />
    </div>
  );
}
