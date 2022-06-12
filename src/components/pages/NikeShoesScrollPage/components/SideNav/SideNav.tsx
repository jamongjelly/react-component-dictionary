import React from 'react';

import * as S from './SideNav.styles';

interface Props {
  currentPage: number;
}

export const SideNav = ({ currentPage: activeIndex }: Props) => {
  return (
    <S.Ul>
      <S.Li />
      <S.Li />
      <S.Li />
      <S.Li />
    </S.Ul>
  );
};
