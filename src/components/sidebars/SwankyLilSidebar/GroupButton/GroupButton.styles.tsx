import styled from 'styled-components';

import { getTransition } from '../styles';

const BACKGROUND = '#212e41';
const HOVER_COLOR = 'rgb(33, 46, 65)';
const BORDER_COLOR = '#2a394f';

const ARROW_COLOR = 'white';
const ARROW_ACTIVE_COLOR = 'rgb(20, 163, 249)';
const BAR_COLOR = 'rgb(53, 87, 137)';

const BUTTON_MIN_HEIGHT = 72;
const BUTTON_PADDING = 25;
const ICON_SIZE = 16;
const TEXT_INDENT = 4;
const ARROW_SIZE = 8;
const ARROW_THICKNESS = 2;
const BAR_HEIGHT = 3;

export const Container = styled.div`
  input[type='checkbox']:checked + .Button {
    background: ${BACKGROUND};
    text-indent: ${TEXT_INDENT}px;

    .Arrow {
      transform: rotate(135deg);
      border-top-color: ${ARROW_ACTIVE_COLOR};
      border-right-color: ${ARROW_ACTIVE_COLOR};
    }
  }
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const Button = styled.div`
  min-height: ${BUTTON_MIN_HEIGHT}px;
  position: relative;
`;

/* Group Button Label */
export const Label = styled.label`
  height: ${BUTTON_MIN_HEIGHT}px;
  padding: ${BUTTON_PADDING}px;

  border-bottom: 1px solid ${BORDER_COLOR};

  display: flex;
  align-items: center;

  cursor: pointer;

  ${getTransition('text-indent')}

  &:hover {
    background: ${HOVER_COLOR};
    text-indent: ${TEXT_INDENT}px;

    .Bar {
      width: 100%;
    }
  }
`;

export const Icon = styled.img`
  width: ${ICON_SIZE}px;
  aspect-ratio: 1;
  margin-right: ${ICON_SIZE * 0.8}px;

  flex-shrink: 0;
  display: inline;
  vertical-align: middle;

  image-rendering: -webkit-optimize-contrast;
  object-fit: contain;
`;

export const GroupName = styled.div`
  flex-grow: 1;
`;

export const Arrow = styled.div`
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  border-top: ${ARROW_THICKNESS}px solid ${ARROW_COLOR};
  border-right: ${ARROW_THICKNESS}px solid ${ARROW_COLOR};

  transform: rotate(45deg);

  transition: transform 0.4s;
`;

export const Bar = styled.div`
  background: ${BAR_COLOR};
  width: 0;
  height: ${BAR_HEIGHT}px;

  position: absolute;
  left: 0;
  bottom: 0;

  display: block;

  transition: width 0.15s;
`;
