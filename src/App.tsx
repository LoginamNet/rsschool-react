import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Layout } from 'components/layout/Layout';
import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { Form } from 'pages/Form';
import { NotFoundPage } from 'pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="form" element={<Form />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
