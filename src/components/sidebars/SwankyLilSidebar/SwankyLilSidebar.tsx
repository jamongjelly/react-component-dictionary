import React from 'react';

import { MenuItem } from './types';
import { GroupButton } from './GroupButton';

import * as S from './SwankyLilSidebar.styles';

interface Props {
  menu: MenuItem[];
}

export const SwankyLilSidebar = ({ menu }: Props) => {
  return (
    <S.Aside>
      {menu && menu.map((item) => <GroupButton key={item.label} item={item} />)}
    </S.Aside>
  );
};
