import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/layout/Layout';
import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { Form } from 'pages/Form';
import { NotFoundPage } from 'pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="form" element={<Form />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
