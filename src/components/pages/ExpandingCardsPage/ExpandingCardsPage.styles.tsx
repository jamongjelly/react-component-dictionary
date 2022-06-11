import styled from 'styled-components';

const MEDIA = 798;
const SIZE = 80;
const CARD_MIN_WIDTH = 600;

export const CardContainer = styled.div<{ length: number }>`
  width: calc(100% - 100px);
  min-width: 600px;
  max-width: 900px;
  height: 400px;

  display: flex;
  align-items: stretch;

  overflow: hidden;

  ${({ length }) =>
    [...Array(length - 1)].reduce(
      (acc, n, index) =>
        acc +
        `
    @media screen and (max-width: ${MEDIA - (index + 1) * SIZE}px) {
      min-width: ${CARD_MIN_WIDTH - (index + 1) * SIZE}px;

      > div:nth-child(${length - index}) {
        display: none;
      }
    }
  `,
      '',
    )}
`;
