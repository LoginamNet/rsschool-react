import React, { useCallback, useEffect, useState } from 'react';

import { Search } from 'components/search/Search';
import { Cards } from 'components/cards/Cards';
import { MainModal } from 'components/modal/MainModal';
import { Loading } from 'components/loading/Loading';
import { ACCESS_KEY } from 'common/keys';

export type MainCard = {
  id: string;
  alt_description: string;
  description: string | null;
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
    location: string | null;
  };
};

type ComponentProps = {
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
};

export function Main(props: ComponentProps) {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [isPending, setIsPending] = useState(true);
  const [cards, setCards] = useState<MainCard[]>([]);
  const [isModalOpen, setModal] = useState(false);
  const [modalCard, setModalCard] = useState<MainCard>(
    JSON.parse(localStorage.getItem('modalCard')!) || null
  );

  const fetchData = useCallback(async () => {
    setIsPending(true);

    try {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${search}&client_id=${ACCESS_KEY}`
      );
      const json = await data.json();
      const result = json.results;

      setCards(result);
    } catch (err) {
      console.error(err);
    }

    const timer = setTimeout(() => setIsPending(false), 1000);
    () => clearTimeout(timer);
  }, [search]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const getCurrenModalCard = (card: MainCard) => {
    localStorage.setItem('modalCard', JSON.stringify(card));
    setModalCard(card);
  };

  useEffect(() => {
    props.setHeaderTitle('HOME');
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="page mainPage">
      <Search setSearch={setSearch} />
      {isPending ? (
        <Loading />
      ) : cards.length ? (
        <Cards cards={cards} openModal={openModal} getCurrentModalCard={getCurrenModalCard} />
      ) : (
        <span className="noCardsText">
          Empty search or no results on your request! Please, add some text or try other keywords in
          search area and press Find button or Enter to display pictures. For example, «cat» or
          «plane».
        </span>
      )}
      <MainModal closeModal={closeModal} isModalOpen={isModalOpen} modalCard={modalCard} />
    </div>
  );
}
