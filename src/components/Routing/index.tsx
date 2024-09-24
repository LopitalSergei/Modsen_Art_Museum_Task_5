import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from '@constants/routes';

export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.app.path} element={<routes.app.element />}>
          <Route index element={<routes.home.element />} />
          <Route
            path={`${routes.artWork.path}/:id`}
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
