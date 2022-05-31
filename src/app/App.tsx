import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Home, Buttons, CDPlayerPage } from '@/app/pages';
import { PATH } from '@/app/constants';
import { GlobalStyles } from '@/app/styles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Buttons />} />
        <Route path={PATH.BUTTONS} element={<Buttons />} />
        <Route path={PATH.CDPLAYER} element={<CDPlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
};
