import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from 'store';

export function NotFoundPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: '404' }));
  });

  return (
    <div className="page notFoundPage">
      <h1>Oops!</h1>
      <span>There`s no such page!</span>
    </div>
  );
}
