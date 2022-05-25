import styled, { css } from 'styled-components';

const GRADIENT_DIRECTION = '120deg';

export const Container = styled.div`
  overflow: hidden;
  font-size: 16px;
`;

export const Article = styled.article<{ background: [string, string] }>`
  ${({ background }) => css`
    background: linear-gradient(
      ${GRADIENT_DIRECTION},
      ${background[0]},
      ${background[1]}
    );
  `}
  width: 100vw;
  height: 100vh;

  transition: background 1s ease-out;
  touch-action: none;
`;

export const ButtonBox = styled.div`
  width: 100%;

  position: fixed;
  bottom: 5vh;

  text-align: center;
`;
