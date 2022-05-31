import React from 'react';
import styled from 'styled-components';

import {
  BubblyButton,
  RippleButton,
  PaperPlaneButton,
  SimpleSwitch,
} from '@/components';

import { Layout } from '../components';

export const Buttons = () => {
  return (
    <Layout>
      <Row>
        <BubblyButton />
        <RippleButton>RippleButton</RippleButton>
        <PaperPlaneButton />
        <SimpleSwitch />
      </Row>
    </Layout>
  );
};

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;
