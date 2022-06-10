import styled from 'styled-components';

const FONT_SIZE = 64;

export const GradientText = styled.h1`
  margin: 0;
  padding: 0;

  background: conic-gradient(
    #d9d7f1 12%,
    #baabda 12%,
    #baabda 33%,
    #e7fbbe 33%,
    #e7fbbe 55%,
    #ffcbcb 55%,
    #ffcbcb 70%,
    #b5deff 70%,
    #b5deff 87%,
    #f7d1ba 87%
  );
  background-size: 50%;
  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: ${FONT_SIZE}px;
  line-height: ${FONT_SIZE * 1.5}px;
  word-break: break-all;

  cursor: pointer;

  animation: expand-reverse 0.5s ease forwards;

  &:hover {
    animation: expand 0.5s ease forwards;
  }

  @keyframes expand {
    0% {
      background-size: 50%;
      background-position: 0 0;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 325%;
      background-position: -13em -4em;
    }
  }

  @keyframes expand-reverse {
    0% {
      background-size: 325%;
      background-position: -13em -4em;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 50%;
      background-position: 0 0;
    }
  }
`;
