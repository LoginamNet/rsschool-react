import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from 'components/layout/Layout';
import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
