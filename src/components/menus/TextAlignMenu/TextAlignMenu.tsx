import React, { useState } from 'react';

import { AlignInput } from './AlignInput';
import { AlignType } from './types';

import * as S from './TextAlignMenu.styles';

export const TextAlignMenu = () => {
  const [align, setAlign] = useState<AlignType>('left');

  function onChange(align: AlignType) {
    setAlign(align);
  }

  return (
    <S.Panel>
      <AlignInput
        align="left"
        value={align}
        onChange={onChange}
        defaultChecked
      />
      <AlignInput align="center" value={align} onChange={onChange} />
      <AlignInput align="right" value={align} onChange={onChange} />
      <AlignInput align="justify" value={align} onChange={onChange} />
      <S.Floater className="floater">
        <span>
          <span />
        </span>
        <span>
          <span />
        </span>
        <span>
          <span />
        </span>
      </S.Floater>
    </S.Panel>
  );
};
