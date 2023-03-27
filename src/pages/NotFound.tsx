import React, { useEffect } from 'react';

type ComponentProps = {
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
};

export function NotFoundPage(props: ComponentProps) {
  useEffect(() => {
    props.setHeaderTitle('404');
  });

  return (
    <div className="page notFoundPage">
      <h1>Oops!</h1>
      <span>There`s no such page!</span>
    </div>
  );
}
