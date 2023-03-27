import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from 'components/layout/Layout';
import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { Form } from 'pages/Form';
import { NotFoundPage } from 'pages/NotFound';

function App() {
  const [headerTitle, setHeaderTitle] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout headerTitle={headerTitle} />}>
          <Route index element={<Main setHeaderTitle={setHeaderTitle} />}></Route>
          <Route path="about" element={<About setHeaderTitle={setHeaderTitle} />}></Route>
          <Route path="form" element={<Form setHeaderTitle={setHeaderTitle} />}></Route>
          <Route path="*" element={<NotFoundPage setHeaderTitle={setHeaderTitle} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
