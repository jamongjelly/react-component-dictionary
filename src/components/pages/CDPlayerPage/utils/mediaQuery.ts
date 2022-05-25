import { css } from 'styled-components';

const breakpoints: { [x: string]: number } = {
  desktop: 1024,
  tablet: 720,
};

export const mediaQuery = Object.keys(breakpoints).reduce(
  (acc, label: string) => {
    acc[label] = (...args: string[]) => css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(...args)}
      }
    `;

    return acc;
  },
  {},
);
