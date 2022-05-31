import React, { useState } from 'react';

import { MenuItem } from '../types';
import { SubMenu } from './SubMenu';

import * as S from './GroupButton.styles';

interface Props {
  item: MenuItem;
}

export const GroupButton = ({ item }: Props) => {
  const [checked, setChecked] = useState(false);

  function onChange() {
    setChecked((prev) => !prev);
  }

  return (
    <S.Container>
      <S.CheckboxInput
        id={item.label}
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <S.Button className="Button">
        <S.Label htmlFor={item.label}>
          <S.GroupName>
            <S.Icon src={item.icon} alt={item.label} />
            {item.label}
          </S.GroupName>
          <S.Arrow className="Arrow" />
          <S.Bar className="Bar" />
        </S.Label>
        {item?.subMenu && <SubMenu subMenu={item.subMenu} checked={checked} />}
      </S.Button>
    </S.Container>
  );
};
