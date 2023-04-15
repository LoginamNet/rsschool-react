import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTitle } from 'reducers/title.reducer';
import { useGetCardsQuery } from 'reducers/api.reducer';

import { Search } from 'components/search/Search';
import { Cards } from 'components/cards/Cards';
import { MainModal } from 'components/modal/MainModal';
import { Loading } from 'components/loading/Loading';
import { messages } from 'common/messages';

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
  const dispatch = useDispatch();

  const search = useSelector((state: RootState) => state.search.value.search);
  const { data, error, isFetching } = useGetCardsQuery(search);

  useEffect(() => {
    dispatch(setHeaderTitle('HOME'));
  });

  return (
    <div className="page mainPage">
      <Search />
      {isFetching ? (
        <Loading />
      ) : data.results.length ? (
        <Cards cards={data.results} />
      ) : (
        <span className="noCardsContainer">
          <h2 className="noCardsHeader">Hmm, something`s wrong..</h2>
          <span className="noCardsText">
            {error ? messages.FETCHING_CARDS_ERROR : messages.EMPTY_SEARCH_ERROR}
          </span>
        </span>
      )}
      <MainModal />
    </div>
  );
}
