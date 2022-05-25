import React, { useEffect, useState } from 'react';

import { AlbumData } from '../../types';

import * as S from './Album.styles';

interface Props {
  data: AlbumData;
  active: boolean;
}

export const Album = ({
  data: { imageUrl, videoUrl, background },
  active,
}: Props) => {
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setDelay(false);
      }, 500);
    } else {
      setDelay(true);
    }
  }, [active]);

  return (
    <S.Section active={active}>
      <S.Disc className="disc" active={active} delay={delay}>
        <S.DiscInner background={background[0]}></S.DiscInner>
      </S.Disc>
      <S.CoverImg href={videoUrl} target="blank">
        <img src={imageUrl} alt="" />
      </S.CoverImg>
    </S.Section>
  );
};
