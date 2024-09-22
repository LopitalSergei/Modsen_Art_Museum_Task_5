import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '@constants/routes';

export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.app.path} element={<routes.app.element />}>
          <Route index element={<routes.home.element />} />
          <Route
            path={routes.artWork.path}
            element={<routes.artWork.element />}
          />
          <Route
            path={routes.favorites.path}
            element={<routes.favorites.element />}
          />
        </Route>
        <Route
          path={routes.notFound.path}
          element={<routes.notFound.element />}
        />
      </Routes>
    </BrowserRouter>
  );
};
