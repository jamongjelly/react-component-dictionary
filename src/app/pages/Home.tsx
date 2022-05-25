import React from 'react';
import styled from 'styled-components';

import { BubblyButton } from '@/components';

export const Home = () => {
  return (
    <Container>
      <BubblyButton />
    </Container>
  );
};

const Container = styled.main`
  min-height: 100%;
  padding: 40px;
`;
