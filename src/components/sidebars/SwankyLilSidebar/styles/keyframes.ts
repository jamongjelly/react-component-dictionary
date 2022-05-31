import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    left: -100%;
    opacity: 0;
  }
  to {
    left: 0%;
    opacity: 1;
  }
`;
