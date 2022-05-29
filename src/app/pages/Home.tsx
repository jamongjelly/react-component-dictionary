import React from 'react';
import styled from 'styled-components';

import { BubblyButton, RippleButton } from '@/components';
import { PaperPlaneButton } from '@/components/buttons/PaperPlaneButton';

export const Home = () => {
  return (
    <Container>
      <Row>
        <BubblyButton />
        <RippleButton>RippleButton</RippleButton>
        <PaperPlaneButton />
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
