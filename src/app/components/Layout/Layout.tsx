import React from 'react';
import styled from 'styled-components';

import { sidebarMenu } from '@/app/routes';
import { SwankyLilSidebar } from '@/components';

interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <SidebarSection>
        <SwankyLilSidebar menu={sidebarMenu} />
      </SidebarSection>
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const SidebarSection = styled.section`
  padding: 8px;
  flex-shrink: 0;
`;

const Main = styled.main`
  min-height: 100%;
  padding: 40px;
`;
