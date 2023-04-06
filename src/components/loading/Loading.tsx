import React from 'react';
import './Loading.css';

export function Loading() {
  return (
    <div className="loadingContainer" role="loading">
      <div className="loadingSpinner"></div>
      <span className="loadingText">Loading..</span>
    </div>
  );
}
