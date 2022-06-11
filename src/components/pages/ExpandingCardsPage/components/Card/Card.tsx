import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import * as S from './Card.styles';

interface Props {
  background?: string;
  active: boolean;
  icon: IconDefinition;
  title?: string;
  description?: string;
  onClick: () => void;
}

export const Card = ({
  background,
  active,
  icon,
  title,
  description,
  onClick,
}: Props) => {
  const style = { '--background': background } as React.CSSProperties;

  return (
    <S.Container style={style} active={active} onClick={onClick}>
      <S.Shadow active={active} />
      <S.Label active={active}>
        <S.Icon>
          <FontAwesomeIcon icon={icon} />
        </S.Icon>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
      </S.Label>
    </S.Container>
  );
};
