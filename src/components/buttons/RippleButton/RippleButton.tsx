import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {
  background?: string;
  fontColor?: string;
  shadowColor?: string;
  children: React.ReactNode;
}

export const RippleButton = ({
  background = '#590696',
  fontColor = '#FFF',
  shadowColor = '#bf75ce',
  children,
}: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [clicked, setClicked] = useState(false);
  const [top, setTop] = useState<number | null>(null);
  const [left, setLeft] = useState<number | null>(null);

  const style = {
    '--background': background,
    '--font-color': fontColor,
    '--shadow-color': shadowColor,
  } as React.CSSProperties;

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement;

    setTop(event.clientY - target.getBoundingClientRect().top);
    setLeft(event.clientX - target.getBoundingClientRect().left);
    setClicked((prev) => !prev);
  };

  useEffect(() => {
    if (ref?.current) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.top = top + 'px';
      bubble.style.left = left + 'px';
      ref.current.appendChild(bubble);

      setTimeout(() => {
        if (ref?.current) {
          ref.current.removeChild(bubble);
        }
      }, 400);
    }
  }, [clicked]);

  return (
    <Button ref={ref} onMouseDown={handleRipple} style={style}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  border: none;
  outline: none;

  background: var(--background);
  box-shadow: 0 0 16px var(--shadow-color);
  padding: 16px 64px;
  border-radius: 4px;

  display: block;
  flex-shrink: 0;
  position: relative;

  color: var(--font-color);
  font-weight: bold;
  font-size: 20px;

  cursor: pointer;

  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease;
  overflow: hidden;

  &:active {
    transform: scale(0.9);
  }

  .bubble {
    background: rgba(243, 243, 243, 0.623);
    width: 40px;
    height: 40px;
    border-radius: 50%;

    position: absolute;

    pointer-events: none;

    animation: ripple 0.4s linear forwards;
  }

  @keyframes ripple {
    0% {
      opacity: 0.7;
      width: 0;
      height: 0;
      transform: translate(0, 0);
    }
    100% {
      opacity: 0;
      width: 200px;
      height: 200px;
      transform: translate(-100px, -100px);
    }
  }
`;
