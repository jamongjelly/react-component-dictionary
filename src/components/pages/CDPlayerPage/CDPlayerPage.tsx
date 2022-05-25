import React from 'react';

import { Album, AlbumButton, PointWrap } from './components';

import { useCDPlayer } from './hooks';
import { GlobalStyles } from './styles';
import './styles/reset.css';

import * as S from './CDPlayerPage.styles';

export const CDPlayerPage = () => {
  const { albums, currentCD, onClickPrev, onClickNext, onClickMoveTo } =
    useCDPlayer();

  return (
    <S.Container>
      <GlobalStyles />
      <S.Article background={albums[currentCD]?.background}>
        {albums.map((data, idx) => (
          <Album key={data.id} data={data} active={idx === currentCD} />
        ))}
      </S.Article>
      <S.ButtonBox>
        <AlbumButton onClick={onClickPrev}>PREV</AlbumButton>
        <PointWrap
          count={albums.length}
          activeIndex={currentCD}
          onClickMoveTo={onClickMoveTo}
        />
        <AlbumButton onClick={onClickNext}>NEXT</AlbumButton>
      </S.ButtonBox>
    </S.Container>
  );
};
