import styled from 'styled-components';

const SHADOW_COLOR = 'rgba(0,0,0,0.2)';
const RADIO_DURATION = '0.2s';
const WORM_DURATION = '0.4s';
const TIMING1 = 'cubic-bezier(0.45, 0.05, 0.55, 0.95)';
const TIMING2 = 'cubic-bezier(0.5, 0, 0.5, 2)';

const RADIOS = 3;

export const Radio = styled.input`
  font-family: Hind, sans-serif;

  &:checked + label,
  &:checked + label:before {
    color: #255ff4;
  }

  &:checked {
    label {
      &,
      &:before {
        transition-delay: ${WORM_DURATION};
      }

      &:before {
        transform: scale(1.2);
      }
    }
  }
`;

export const Label = styled.label`
  display: block;

  font-weight: bold;
  text-shadow: 0 0.1em 0.1em ${SHADOW_COLOR};

  cursor: pointer;

  transition: color ${RADIO_DURATION} ${TIMING1};

  &:not(:last-of-type) {
    margin-bottom: 1.5em;
  }

  &:before {
    content: '';

    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;

    border-radius: 50%;
    box-shadow: 0 0 0 0.2em currentColor inset, 0 0.2em 0.2em ${SHADOW_COLOR},
      0 0.3em 0.2em ${SHADOW_COLOR} inset;

    display: inline-block;
    vertical-align: bottom;

    transition: transform ${RADIO_DURATION} ${TIMING2},
      box-shadow ${RADIO_DURATION} ${TIMING1},
      color ${RADIO_DURATION} ${TIMING1};
  }
`;
