import React from 'react';
import styled from 'styled-components';

import {
  BubblyButton,
  RippleButton,
  PaperPlaneButton,
  SimpleSwitch,
} from '@/components';

export const Home = () => {
  return (
    <Container>
      <Row>
        <BubblyButton />
        <RippleButton>RippleButton</RippleButton>
        <PaperPlaneButton />
        <SimpleSwitch />
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
  align-items: flex-start;
  gap: 24px;
`;
