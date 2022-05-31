import React from 'react';

import { StyledButton } from './BubblyButton.styles';
import { useBubblyButton } from './useBubblyButton';

interface Props {
  children: React.ReactNode;
}

export const BubblyButton = ({ children }: Props) => {
  const { animate, handleClick } = useBubblyButton();

  return (
    <StyledButton animate={animate} onMouseDown={handleClick}>
      {children}
    </StyledButton>
  );
};
