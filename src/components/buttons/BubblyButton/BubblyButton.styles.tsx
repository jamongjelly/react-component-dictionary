import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { particles, bottomBubbles, topBubbles } from './styles';

const FUSCHIA = '#ff0081';
const BUTTON_BG = FUSCHIA;
const BUTTON_TEXT_COLOR = '#fff';

/**
 * 특이사항
 *
 * * 그림자
 */
export const StyledButton = styled.button<{ animate: boolean }>`
  border: none;
  -webkit-appearance: none;
  appearance: none; // 네이티브 모양 없애기
  cursor: pointer;

  background-color: ${BUTTON_BG};
  color: ${BUTTON_TEXT_COLOR};
  box-shadow: 0 2px 25px ${BUTTON_BG}80;

  border-radius: 4px;

  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1em;
  padding: 1em 2em;

  position: relative;
  display: inline-block;

  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;

  /* 가상 선택자 */
  &:focus {
    outline: 0;
  }

  &:active {
    background-color: ${darken(0.02, BUTTON_BG)};
    box-shadow: 0 2px 25px ${BUTTON_BG}33;

    transform: scale(0.9);
  }

  /* 주요 코드 */
  &:before,
  &:after {
    content: '';

    background-repeat: no-repeat;

    width: 140%;
    height: 100%;

    z-index: -1000;
    position: absolute;
    left: -20%;
    display: block;

    transition: all ease-in-out 0.5s;
  }

  ${particles(BUTTON_BG)}

  ${({ animate }) =>
    animate &&
    css`
      &:before {
        display: block;
        animation: ${topBubbles} ease-in-out 0.75s forwards;
      }

      &:after {
        display: block;
        animation: ${bottomBubbles} ease-in-out 0.75s forwards;
      }
    `}
`;
