import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from '@/app/styles';
export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
