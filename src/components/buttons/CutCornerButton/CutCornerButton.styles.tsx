import styled from 'styled-components';

export const Button = styled.button`
  border: none;

  background: linear-gradient(
        to bottom left,
        var(--font-color) 50%,
        #0000 50.1%
      )
      top right,
    linear-gradient(to top right, var(--font-color) 50%, #0000 50.1%) bottom
      left;
  background-size: calc(var(--slant) + 1.3 * var(--border))
    calc(var(--slant) + 1.3 * var(--border));
  background-repeat: no-repeat;

  box-shadow: 0 0 0 200px inset var(--s, #0000),
    0 0 0 var(--border) inset var(--font-color);
  clip-path: polygon(
    0 0,
    calc(100% - var(--slant)) 0,
    100% var(--slant),
    100% 100%,
    var(--slant) 100%,
    0 calc(100% - var(--slant))
  );

  padding: 0.4em 1.2em;

  color: var(--font-color);
  font-size: 35px;
  font-weight: bold;

  cursor: pointer;

  transition: color var(--t, 0.3s), background-size 0.3s;

  &:active {
    --s: #000500;
    transition: none;
  }

  &:hover,
  &:active {
    --t: 0.2s 0.1s;

    background-size: 100% 100%;
    color: #fff;
  }

  &:focus-visible {
    outline-offset: calc(-1 * var(--border));
    outline: var(--border) solid #000c;
    clip-path: none;
    background-size: 0 0;
  }
`;
