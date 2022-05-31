import styled from 'styled-components';

const FONT_COLOR = '#fff';

const WIDTH = 224;
const FONT_SIZE = 14;

export const Aside = styled.aside`
  background: #2a394f;
  width: ${WIDTH}px;
  border-radius: 4px;

  overflow: hidden;

  font-size: ${FONT_SIZE}px;

  &,
  a,
  a:active,
  a:hover,
  a:visited,
  a:focus {
    color: ${FONT_COLOR};
  }
`;
