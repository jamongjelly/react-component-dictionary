import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Home, CDPlayerPage } from '@/app/pages';
import { URL } from '@/app/constants';
import { GlobalStyles } from '@/app/styles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path={URL.CDPLAYER} element={<CDPlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
};
