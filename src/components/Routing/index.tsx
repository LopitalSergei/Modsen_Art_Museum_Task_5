import App from '@components/App';
import Artwork from '@pages/Artwork';
import Favorites from '@pages/Favorites';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/artwork/:id" element={<Artwork />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
