import React from 'react';

import { AlignType } from '../types';

import * as S from './AlignInput.styles';

interface Props {
  align: AlignType;
  defaultChecked?: boolean;
  value: AlignType;
  onChange: (align: AlignType) => void;
}

export const AlignInput = ({
  align,
  defaultChecked,
  value,
  onChange,
}: Props) => {
  return (
    <S.Input
      type="radio"
      className={align}
      value={align}
      defaultChecked={defaultChecked}
      checked={value === align}
      onChange={() => onChange(align)}
    />
  );
};
