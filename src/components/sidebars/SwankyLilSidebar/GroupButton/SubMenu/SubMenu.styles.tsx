import styled, { css } from 'styled-components';

import { fadeIn, getTransition } from '../../styles';

const BACKGROUND = '#15a4fa';
const BACKGROUND_HOVER = '#0c93e4';

const TEXT_INDENT = 24;
const TEXT_INDENT_HOVER = 31;

export const Container = styled.div<{ numOfItems: number }>`
  width: 100%;
  height: 0;

  overflow: hidden;

  transition: height 0.4s;

  &.checked {
    height: ${({ numOfItems }) => 68 * numOfItems}px;

    display: block;
    top: 72px;
    border-bottom: 1px solid rgb(33, 46, 65);

    ul li {
      animation-name: ${fadeIn};
      animation-duration: 0.3s;
      animation-fill-mode: forwards;

      ${({ numOfItems }) => getListStyles(numOfItems)}
    }
  }
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  background: ${BACKGROUND};
  width: 100%;

  opacity: 0;
  text-indent: ${TEXT_INDENT}px;

  position: relative;
  left: -100%;

  ${getTransition('text-indent')}

  &:hover {
    background: ${BACKGROUND_HOVER};
    box-shadow: 3px 0px #126ca1 inset;
    text-indent: ${TEXT_INDENT_HOVER}px;
  }

  a {
    display: block;
    padding: 25px 0px;

    text-decoration: none;
  }
`;

function getListStyles(numOfItems: number) {
  const styles = [...Array(numOfItems)]
    .map((value, index) => {
      const nth = index + 1;

      return `
        &:nth-of-type(${nth}) {
          animation-delay: ${0.25 + nth / 8}s;
        }
      `;
    })
    .join('');

  return css`
    ${styles}
  `;
}
