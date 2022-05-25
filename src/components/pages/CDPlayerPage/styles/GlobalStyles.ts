import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    overflow: hidden;
    font-size: 16px;
  }
`;
