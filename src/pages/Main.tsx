import React, { useCallback, useEffect, useState } from 'react';
import { Search } from 'components/search/Search';
import { Cards } from 'components/cards/Cards';
import { ACCESS_KEY } from 'common/keys';
import { MainModal } from 'components/modal/MainModal';

export type MainCard = {
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
    location: string;
  };
};

type ComponentProps = {
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
};

export function Main(props: ComponentProps) {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [cards, setCards] = useState<MainCard[]>([]);
  const [isModalOpen, setModal] = useState(false);
  const [modalCard, setModalCard] = useState<MainCard>(
    JSON.parse(localStorage.getItem('modalCard')!) || {}
  );

  const fetchData = useCallback(async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${search}&client_id=${ACCESS_KEY}`
    );
    const json = await data.json();
    const result = json.results;
    setCards(result);
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
      {cards.length ? (
        <Cards cards={cards} openModal={openModal} getCurrentModalCard={getCurrenModalCard} />
      ) : (
        <span className="noCardsText">
          Please, add some text if search area and press Find button or Enter to display pictures.
          For example, «cat» or «plane».
        </span>
      )}
      <MainModal closeModal={closeModal} isModalOpen={isModalOpen} modalCard={modalCard} />
    </div>
  );
}
