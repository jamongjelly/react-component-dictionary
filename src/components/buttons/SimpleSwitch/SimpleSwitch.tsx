import React, { useState } from 'react';

import * as S from './SimpleSwitch.styles';

const transition = {
  type: 'spring',
  stiffness: 800,
  damping: 40,
};

interface Props {
  background?: string;
}

export const SimpleSwitch = ({ background = '#92B4EC' }: Props) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn((prev) => !prev);

  return (
    <S.Bar background={background} data-isOn={isOn} onClick={toggleSwitch}>
      <S.Handle layout transition={transition} />
    </S.Bar>
  );
};
