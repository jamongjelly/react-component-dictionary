import styled, { css } from 'styled-components';

import { AlignType } from '../types';

const COLOR = '#E6E9ED';
const COLOR_HOVER = '#D6D8DB';

export const Input = styled.input<{ value: AlignType }>`
  margin: 0;
  appearance: none;

  position: relative;

  color: ${COLOR};
  font-size: 100%;

  cursor: pointer;

  &::before,
  &::after {
    content: '';
    background: currentColor;
    height: 0.25em;
    border-radius: 1em;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.25s;
  }

  &::before {
    box-shadow: 0 0.75em 0 0 currentColor;
  }
  &::after {
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    color: ${COLOR_HOVER};
  }

  /* 정렬 방향 */
  ${({ value }) => getAlignStyles(value)}
`;

function getAlignStyles(align: AlignType) {
  const INPUT_GAP = 1.5;
  const MARGIN = 0.1;

  let spanPosition = 0;
  let left = 0;
  let right = MARGIN * 2;

  switch (align) {
    case 'center':
      spanPosition = INPUT_GAP;
      left = MARGIN;
      right = MARGIN;
      break;
    case 'right':
      spanPosition = INPUT_GAP * 2;
      left = MARGIN * 2;
      right = 0;
      break;
    case 'justify':
      spanPosition = INPUT_GAP * 3;
      left = 0;
      right = 0;
      break;
  }

  return css`
    &::after {
      left: ${left}em;
      right: ${right}em;
    }

    &:checked ~ .floater {
      & > span {
        left: ${spanPosition}em;
        &:nth-child(2) span {
          margin-left: ${left}em;
          margin-right: ${right}em;
        }
      }
    }
  `;
}
