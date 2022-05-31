import { css } from 'styled-components';

export const particles = (bgColor: string) => css`
  &:before {
    /* 색상 */
    background-image: radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, ${bgColor} 20%, transparent 30%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, ${bgColor} 15%, transparent 20%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;

    /* 배치 */
    top: -75%;
    display: none;
  }

  &:after {
    /* 색상 */
    background-image: radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, ${bgColor} 15%, transparent 20%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%),
      radial-gradient(circle, ${bgColor} 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
      20% 20%;

    /* 배치 */
    bottom: -75%;
    display: none;
  }
`;
