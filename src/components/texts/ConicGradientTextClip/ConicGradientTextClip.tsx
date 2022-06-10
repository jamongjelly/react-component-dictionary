import React from 'react';

import * as S from './ConicGradientTextClip.styles';

interface Props {
  children?: React.ReactNode;
}

export const ConicGradientTextClip = ({ children }: Props) => {
  return <S.GradientText>{children}</S.GradientText>;
};
