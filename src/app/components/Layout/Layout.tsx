import React from 'react';
import styled from 'styled-components';

import { MenuItem, SwankyLilSidebar } from '@/components';

interface Props {
  children?: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/dash.png',
    subMenu: [{ label: 'Tools' }, { label: 'Reports' }],
  },
  {
    label: 'Sales',
    icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/del.png',
    subMenu: [
      { label: 'New Sales' },
      { label: 'Expired Sales' },
      { label: 'Sales Reports' },
      { label: 'Deliveries' },
    ],
  },
  {
    label: 'Messages',
    icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mess.png',
    subMenu: [
      { label: 'Inbox' },
      { label: 'Outbox' },
      { label: 'Sent' },
      { label: 'Archived' },
    ],
  },
  {
    label: 'Users',
    icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/users.png',
    subMenu: [
      { label: 'New User' },
      { label: 'User Groups' },
      { label: 'Permissions' },
      { label: 'Passwords' },
    ],
  },
  {
    label: 'Settings',
    icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/set.png',
    subMenu: [
      { label: 'Databases' },
      { label: 'Design' },
      { label: 'Change User' },
      { label: 'Log Out' },
    ],
  },
];

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <SidebarSection>
        <SwankyLilSidebar menu={menuItems} />
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
