import styled, { css } from 'styled-components';

import { SCREEN } from '../../constants';

const DISC_GRADIENT_DIRECTION = '120deg';
const DISC_GRADIENT = ['#000', '#333333', '#000'];

const ACTIVE_DISC_DELAY = '0.5s';

export const Section = styled.section<{ active: boolean }>`
  position: absolute;
  top: 47%;
  left: 55%;
  transform: translate(-50%, -50%);

  width: 600px;
  height: 400px;

  transition: all 0.4s ease-in-out;

  &:hover {
    .disc {
      left: 40%;
      transition-delay: 0s;
    }
  }

  /* active style */
  visibility: hidden;
  opacity: 0;

  ${({ active }) =>
    active &&
    css`
      visibility: visible;
      opacity: 1;
      left: 50%;
    `}

  @media only screen and (max-width: ${SCREEN.TABLET_SIZE}px) {
    top: 40%;
    width: 300px;
    height: 200px;

    &:hover {
      .disc {
        left: 50%;
        transition-delay: 0s;
      }
    }

    /* active style */
    ${({ active }) =>
      active &&
      css`
        left: 45%;
      `}
  }
`;

export const Disc = styled.div<{ active: boolean; delay: boolean }>`
  position: absolute;
  top: 4px;
  left: 0;

  width: 392px;
  height: 392px;

  border-radius: 50%;
  background: linear-gradient(
    ${DISC_GRADIENT_DIRECTION},
    ${DISC_GRADIENT[0]},
    ${DISC_GRADIENT[1]},
    ${DISC_GRADIENT[2]}
  );
  box-shadow: 4px 14px 40px rgba(0, 0, 0, 0.3);
  transition: left 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  animation: rotateAni 10s ease infinite;

  @keyframes rotateAni {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* active style */
  ${({ active, delay }) =>
    active &&
    css`
      left: 180px;
      ${delay && `transition-delay: ${ACTIVE_DISC_DELAY};`}
    `}

  @media only screen and (max-width: ${SCREEN.TABLET_SIZE}px) {
    width: 244px;
    height: 244px;

    /* active style */
    ${({ active }) =>
      active &&
      css`
        left: 35%;
      `}
  }
`;

export const DiscInner = styled.div<{ background: string }>`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 160px;
  height: 160px;
  background-color: ${({ background }) => background};
  border-radius: 50%;
  border: 3px dashed rgba(255, 255, 255, 0.4);

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;

    content: '';
  }

  @media only screen and (max-width: ${SCREEN.TABLET_SIZE}px) {
    width: 100px;
    height: 100px;
  }
`;

export const CoverImg = styled.a`
  position: absolute;
  width: 400px;
  height: 400px;
  box-shadow: 2px 14px 40px rgba(0, 0, 0, 0.3);

  img {
    width: inherit;
    height: inherit;
  }

  @media only screen and (max-width: ${SCREEN.TABLET_SIZE}px) {
    width: 250px;
    height: 250px;
  }
`;
