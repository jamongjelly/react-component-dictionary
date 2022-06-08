import styled from 'styled-components';

const BACKGROUND = '#FFFFFF';
const FLOATER_COLOR = '#5D9CEC';
const SHADOW = '#00000020';

const PADDING = '0.5em';

export const Panel = styled.div`
  background: ${BACKGROUND};
  box-shadow: 0 0.25em 1em 0 ${SHADOW}, 0 0.1em 0.2em 0 ${SHADOW};

  padding: ${PADDING};

  border-radius: 0.25em;

  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1em);
  grid-template-rows: 1em;
  grid-gap: ${PADDING};

  font-size: 3rem;
`;

export const Floater = styled.div`
  pointer-events: none;
  position: absolute;
  top: ${PADDING};
  left: ${PADDING};
  right: ${PADDING};
  bottom: ${PADDING};

  color: ${FLOATER_COLOR};

  & > span {
    width: 1em;
    height: 0.25em;

    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;

    transition: 0.25s;

    span {
      height: 100%;
      border-radius: 1em;
      background: currentColor;
      transition: 0.25s;
    }

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      &,
      span {
        transition-delay: 0.1s;
      }
    }
    &:nth-child(3) {
      bottom: 0;
      &,
      span {
        transition-delay: 0.2s;
      }
    }
  }
`;
