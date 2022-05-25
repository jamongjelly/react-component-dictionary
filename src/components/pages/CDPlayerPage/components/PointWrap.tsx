import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  count: number;
  activeIndex: number;
  onClickMoveTo: (index: number) => void;
}

export const PointWrap = ({ count, activeIndex, onClickMoveTo }: Props) => {
  return (
    <Ul>
      {[...Array(count)].map((n, idx) => (
        <Li
          key={idx}
          active={idx === activeIndex}
          onClick={() => onClickMoveTo(idx)}
        />
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  position: relative;
  display: inline-block;
  padding: 0 10px;
`;

const Li = styled.li<{ active: boolean }>`
  position: relative;
  display: inline-block;

  width: 10px;
  height: 10px;
  margin: 0 5px;

  text-align: center;
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;

  transition: background 0.3s ease-out;

  ${({ active }) =>
    active &&
    css`
      background: black;
    `}
`;
