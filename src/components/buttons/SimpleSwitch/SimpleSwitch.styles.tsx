import styled from 'styled-components';
import { motion } from 'framer-motion';

const HEIGHT = 32;
const BAR_RATIO = 1.8;
const HANDLE_RATIO = 0.68;

export const Bar = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  height: ${HEIGHT}px;
  aspect-ratio: ${BAR_RATIO};
  padding: ${(HEIGHT * (1 - HANDLE_RATIO)) / 2}px;

  border-radius: ${HEIGHT / 2}px;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;

  cursor: pointer;

  &[data-isOn='true'] {
    justify-content: flex-end;
  }
`;

export const Handle = styled(motion.button)`
  border: none;

  background: white;
  height: ${HEIGHT * HANDLE_RATIO}px;
  aspect-ratio: 1;
  border-radius: 50%;

  cursor: pointer;
`;
