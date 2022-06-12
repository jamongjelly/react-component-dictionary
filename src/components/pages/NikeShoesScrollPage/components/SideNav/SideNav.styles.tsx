import styled from 'styled-components';

const LI_SIZE = 12;

export const Ul = styled.ul`
  position: fixed;
  top: 50%;
  right: 3vw;
  transform: translateY(-50%);

  list-style: none;

  li + li {
    margin-top: 15px;
  }
`;

export const Li = styled.li`
  background: #999;
  width: ${LI_SIZE}px;
  height: ${LI_SIZE}px;

  border-radius: 50%;

  cursor: pointer;

  transition: background 0.3s ease-out;

  &.active {
    background: #000;
  }
`;
