import styled from 'styled-components';

export const InnerWrap = styled.div`
  z-index: 50;

  background: rgba(255, 255, 255, 0.7);
  width: 460px;
  padding: 60px;
  margin-top: 50px;

  position: relative;
`;

export const ProductTitle = styled.h2`
  color: #333;
`;

export const ProductDescription = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 24px;
`;

export const ImageWrap = styled.div`
  width: 70%;

  position: fixed;
  top: 35%;
  right: 5%;

  img {
    width: 400px;

    position: absolute;

    visibility: hidden;
    opacity: 0;

    transform: translate(-100px, -150px) rotate(-10deg);
    transition: all 1s ease-in-out;

    /* 오른쪽 신발 */
    &:nth-child(2) {
      top: 100px;
      left: 400px;

      transition-delay: 0.2s;
      transform: translate(100px, 150px) rotate(-10deg);
    }
  }

  &.active img {
    visibility: visible;
    opacity: 1;

    transform: translate(0, 0);
  }
`;
