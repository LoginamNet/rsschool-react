import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="notFoundPage">
      There`s no such page! Go <Link to="/">home page</Link>.
    </div>
  );
}
