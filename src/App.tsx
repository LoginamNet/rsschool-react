import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from 'components/layout/Layout';
import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
