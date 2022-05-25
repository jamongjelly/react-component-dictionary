import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const AlbumButton = ({ onClick, children }: Props) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const BACKGROUND = '#333';
const FONT_COLOR = '#FFF';

export const Button = styled.button`
  border: none;
  outline: none;

  padding: 6px 20px;
  margin: 0 3px;
  background-color: ${BACKGROUND};
  color: ${FONT_COLOR};

  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${FONT_COLOR};
    color: ${BACKGROUND};
  }
`;
