import React from 'react';
import styled from 'styled-components';

import { BubblyButton } from '@/components';

export const Home = () => {
  return (
    <Container>
      <Row>
        <BubblyButton />
      </Row>
    </Container>
  );
};

const Container = styled.main`
  min-height: 100%;
  padding: 40px;
`;

const Row = styled.div`
  display: flex;
  gap: 24px;
`;
