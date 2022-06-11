import styled, { css } from 'styled-components';

const DEFAULT_COLOR = '#E6E9ED';

const ICON_COLORS = [
  '#ED5565',
  '#FC6E51',
  '#FFCE54',
  '#2ECC71',
  '#5D9CEC',
  '#AC92EC',
];

export const Container = styled.div<{ active: boolean }>`
  background: var(--background, var(--point-color, ${DEFAULT_COLOR}));
  background-size: auto 120%;
  background-position: center;

  min-width: 60px;
  margin: 10px;

  position: relative;

  overflow: hidden;
  cursor: pointer;

  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

  ${ICON_COLORS.reduce(
    (acc, color, index) =>
      acc +
      `
    &:nth-child(${ICON_COLORS.length}n + ${index}) {
      --point-color: ${color};
    }
  `,
    '',
  )}

  ${({ active }) =>
    active
      ? css`
          background-size: auto 100%;

          max-width: 600px;
          margin: 0;
          border-radius: 40px;

          flex-grow: 10000;

          transform: scale(1);
        `
      : css`
          border-radius: 30px;

          flex-grow: 1;
        `}
`;

export const Shadow = styled.div<{ active: boolean }>`
  height: 120px;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

  ${({ active }) =>
    active
      ? css`
          box-shadow: inset 0 -120px 120px -120px black,
            inset 0 -120px 120px -100px black;
        `
      : css`
          bottom: -40px;
          box-shadow: inset 0 -120px 0px -120px black,
            inset 0 -120px 0px -100px black;
        `}
`;

export const Label = styled.div<{ active: boolean }>`
  height: 40px;

  display: flex;
  position: absolute;
  right: 0;

  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

  ${({ active }) =>
    active
      ? css`
          bottom: 20px;
          left: 20px;

          .info > div {
            left: 0;
            opacity: 1;
          }
        `
      : css`
          bottom: 10px;
          left: 10px;

          .info > div {
            left: 20px;
            opacity: 0;
          }
        `}
`;

export const Icon = styled.div`
  background-color: white;

  width: 40px;
  height: 40px;

  border-radius: 100%;

  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--point-color);
`;

export const Info = styled.div`
  margin-left: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: white;
  white-space: pre;

  > div {
    position: relative;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.5s ease-out;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Description = styled.div`
  transition-delay: 0.1s;
`;
