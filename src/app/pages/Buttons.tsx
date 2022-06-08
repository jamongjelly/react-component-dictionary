import React from 'react';
import styled from 'styled-components';

import {
  BubblyButton,
  RippleButton,
  PaperPlaneButton,
  SimpleSwitch,
  LightRadioButton,
  CutCornerButton,
} from '@/components';

import { Layout } from '../components';

export const Buttons = () => {
  return (
    <Layout>
      <InnerLayout>
        <BubblyButton>BubblyButton</BubblyButton>
        <RippleButton>RippleButton</RippleButton>
        <PaperPlaneButton />
        <SimpleSwitch />
        <LightRadioButton label="A" />
        <CutCornerButton>Button</CutCornerButton>
        <CutCornerButton fontColor="#F3738A" border="2px" slant="0.5em">
          Button
        </CutCornerButton>
        <CutCornerButton fontColor="#69DB3A" border="8px" slant="40px">
          Button
        </CutCornerButton>
      </InnerLayout>
    </Layout>
  );
};

const InnerLayout = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 56px;
`;
