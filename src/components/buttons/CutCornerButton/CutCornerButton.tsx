import React from 'react';

import * as S from './CutCornerButton.styles';

interface Props {
  fontColor?: string;
  border?: string;
  slant?: string;
  children: React.ReactNode;
}

export const CutCornerButton = ({
  fontColor = '#37E8FC',
  border = '5px',
  slant = '0.7em',
  children,
}: Props) => {
  const style = {
    '--font-color': fontColor,
    '--border': border,
    '--slant': slant,
  } as React.CSSProperties;

  return <S.Button style={style}>{children}</S.Button>;
};
