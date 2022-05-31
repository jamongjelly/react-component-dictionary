import React from 'react';
import cx from 'classnames';

import { SubMenuItem } from '../../types';

import * as S from './SubMenu.styles';
import { Link } from 'react-router-dom';

interface Props {
  subMenu: SubMenuItem[];
  checked: boolean;
}

export const SubMenu = ({ subMenu, checked }: Props) => {
  return (
    <S.Container className={cx({ checked })} numOfItems={subMenu.length}>
      <S.Ul>
        {subMenu.map((item) => (
          <S.Li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </S.Li>
        ))}
      </S.Ul>
    </S.Container>
  );
};
