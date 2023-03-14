import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="page notFoundPage">
      <h1>Oops!</h1>
      <span>
        There`s no such page! Go <Link to="/">home page</Link>.
      </span>
    </div>
  );
}
