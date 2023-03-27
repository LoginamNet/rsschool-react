import React, { useEffect } from 'react';
import { Search } from 'components/search/Search';
import { Cards } from 'components/cards/Cards';

type ComponentProps = {
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
};

export function Main(props: ComponentProps) {
  useEffect(() => {
    props.setHeaderTitle('HOME');
  });

  return (
    <div className="page mainPage">
      <Search />
      <Cards />
    </div>
  );
}
