import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Layout } from 'components/layout/Layout';
import { Main } from 'pages/main/Main';
import { About } from 'pages/about/About';
import { NotFoundPage } from 'pages/nopage/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
