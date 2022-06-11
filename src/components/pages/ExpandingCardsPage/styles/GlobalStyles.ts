import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  #root {
    background: #232223;
    color: white;

    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .25s;

    overflow: hidden;
  }
`;
