import React from 'react';

import { TextAlignMenu } from '@/components';

import { Layout } from '../components';
import styled from 'styled-components';

export const Menus = () => {
  return (
    <Layout>
      <Row>
        <TextAlignMenu />
      </Row>
    </Layout>
  );
};

const Row = styled.div`
  flex-shrink: 0;
`;
