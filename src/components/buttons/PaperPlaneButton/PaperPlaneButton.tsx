import React from 'react';
import styled from 'styled-components';
import { useCycle } from 'framer-motion';

import { PaperPlane } from './PaperPlane';

interface Props {
  bgColor: string;
  fontColor: string;
}

const defaultProps: Omit<Props, 'children'> = {
  bgColor: '#2f528f',
  fontColor: '#fff',
};

const labels = { inactive: 'Send', active: 'Sending...', end: 'Thanks' };

export const PaperPlaneButton = ({ bgColor, fontColor }: Props) => {
  const [state, cycleState] = useCycle<'active' | 'inactive' | 'end'>(
    'inactive',
    'active',
    'end',
  );
  const [send, cycleSend] = useCycle('not-send', 'send');

  function onClick() {
    cycleState();

    setTimeout(() => {
      cycleSend();

      setTimeout(() => {
        cycleState();
        cycleSend();

        setTimeout(() => {
          cycleState();
        }, 500);
      }, 500);
    }, 500);
  }

  return (
    <Button $bgColor={bgColor} $fontColor={fontColor} onClick={onClick}>
      <Label>{labels[state]}</Label>
      <PaperPlane state={send === 'not-send'} />
    </Button>
  );
};

PaperPlaneButton.defaultProps = defaultProps;

/* Styles */
const LINE_HEIGHT = 22;

const Button = styled.button<{ $bgColor: string; $fontColor: string }>`
  border: none;
  outline: none;

  background: ${({ $bgColor }) => $bgColor};
  color: ${({ $fontColor }) => $fontColor};
  svg {
    width: ${LINE_HEIGHT}px;
    height: ${LINE_HEIGHT}px;
    fill: ${({ $fontColor }) => $fontColor};
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  padding: 10px 20px;

  border-radius: 100px;

  display: flex;
  align-items: center;
  flex-shrink: 0;

  overflow: hidden;
  cursor: pointer;
  user-select: none;
`;

const Label = styled.span`
  margin-right: 10px;

  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  line-height: ${LINE_HEIGHT}px;
`;
