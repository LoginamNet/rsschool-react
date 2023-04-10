import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setHeaderTitle } from 'store';

import { Search } from 'components/search/Search';
import { Cards } from 'components/cards/Cards';
import { MainModal } from 'components/modal/MainModal';
import { Loading } from 'components/loading/Loading';
import { ACCESS_KEY } from 'common/keys';

import { RootState } from 'store';

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

export function Main() {
  const [isPending, setIsPending] = useState(true);
  const [isCardPending, setIsCardPending] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [cards, setCards] = useState<MainCard[]>([]);
  const [cardID, setCardID] = useState('');
  const [isModalOpen, setModal] = useState(false);
  const [modalCard, setModalCard] = useState<MainCard>();

  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.value.search);

  const fetchData = useCallback(async () => {
    setIsPending(true);

    try {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${search}&client_id=${ACCESS_KEY}`
      );
      const json = await data.json();
      const result = json.results;

      setErrorMessage(
        `Empty search or no results on your request! Please, add some text or try other keywords
      in search area and press Find button or Enter to display pictures. For example, «cat» or
      «plane»`
      );
      setCards(result);
    } catch (err) {
      setErrorMessage(
        `An error occurred while uploading data! Please check the console or try searching again`
      );
      console.error(err);
    }

    const timer = setTimeout(() => setIsPending(false), 1000);
    () => clearTimeout(timer);
  }, [search]);

  const fetchCardData = useCallback(async () => {
    try {
      const data = await fetch(`https://api.unsplash.com/photos/${cardID}?client_id=${ACCESS_KEY}`);
      const result = await data.json();

      setModalCard(result);
    } catch (err) {
      console.error(err);
    }
  }, [cardID]);

  const openModal = (id: string) => {
    setCardID(id);
    setModal(true);
    setIsCardPending(true);

    const modalTimer = setTimeout(() => setIsCardPending(false), 1000);
    () => clearTimeout(modalTimer);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: 'HOME' }));
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchCardData();
  }, [fetchCardData]);

  return (
    <div className="page mainPage">
      <Search />
      {isPending ? (
        <Loading />
      ) : cards.length ? (
        <Cards cards={cards} openModal={openModal} />
      ) : (
        <span className="noCardsContainer">
          <h2 className="noCardsHeader">Hmm, something`s wrong..</h2>
          <span className="noCardsText">{errorMessage}</span>
        </span>
      )}
      <MainModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        isCardPending={isCardPending}
        modalCard={modalCard}
      />
    </div>
  );
}
