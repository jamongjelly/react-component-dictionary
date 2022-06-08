import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Buttons } from '@/app/pages';
import { GlobalStyles } from '@/app/styles';
import { sidebarMenu } from '@/app/routes';

export const App = () => {
  const routes: Array<JSX.Element> = [];
  sidebarMenu
    .map((category) =>
      category.subMenu.map((route) => (
        <Route key={route.path} path={route.path} element={route.element()} />
      )),
    )
    .forEach((subRoutes) => routes.push(...subRoutes));

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Buttons />} />
        {routes}
      </Routes>
    </BrowserRouter>
  );
};
