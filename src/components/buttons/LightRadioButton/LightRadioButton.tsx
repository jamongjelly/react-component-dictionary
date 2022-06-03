import React from 'react';

import * as S from './LightRadioButton.styles';

interface Props {
  label: string;
}

export const LightRadioButton = ({ label }: Props) => {
  const name = `light-radio-${label}`;
  return (
    <div>
      <S.Radio type="radio" name={name} />
      <S.Label htmlFor={name}>{label}</S.Label>
    </div>
  );
};
