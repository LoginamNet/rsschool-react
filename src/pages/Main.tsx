import React, { useCallback, useEffect, useState } from 'react';
import { Search } from 'components/search/Search';
import { Cards } from 'components/cards/Cards';
import { ACCESS_KEY } from 'common/keys';

export type Photo = {
  id: string;
  alt_description: string;
  description: string;
  width: number;
  height: number;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  color: string | null;
  likes: number;
  created_at: string;
  user: {
    username: string;
    name: string;
  };
};

type ComponentProps = {
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
};

export function Main(props: ComponentProps) {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([] as Photo[]);

  const fetchData = useCallback(async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${ACCESS_KEY}`
    );
    const json = await data.json();
    const result = json.results;
    console.log(result);
    setImages(result);
  }, [search]);

  useEffect(() => {
    props.setHeaderTitle('HOME');
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="page mainPage">
      <Search setSearch={setSearch} />
      <Cards images={images} />
    </div>
  );
}
