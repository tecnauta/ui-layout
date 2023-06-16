import * as React from 'react';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';

import { TOPBAR_HEIGHT } from '.';
import Content from './Content';
import LayoutContext, { LayoutContextType } from './context';
import useBoolean from './hooks/useBoolean';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import nestedComponent from './utils/nestedComponent';

export type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children?: React.ReactNode;
};

const Layout = ({ className, children, ...rest }: LayoutProps) => {
  const [hasTopbar, setHasTopbar] = React.useState(false);
  const [hasSidebar, setHasSidebar] = React.useState(false);
  const [hasUserMenu, setHasUserMenu] = React.useState(false);
  const [topbarCenterContainer, setTopbarCenterContainer] = React.useState<HTMLDivElement | null>(null);
  const [userMenuContainer, setUserMenuContainer] = React.useState<HTMLDivElement | null>(null);

  const [userMenuOpened, toogleUserMenuOpened, trueUserMenuOpened, falseUserMenuOpened] = useBoolean(false);
  const [sidebarOpened, toogleSidebarOpened, trueSidebarOpened, falseSidebarOpened] = useBoolean(false);

  const registerTopbar = React.useCallback(() => {
    setHasTopbar(true);
    return () => setHasTopbar(false);
  }, []);

  const registerSidebar = React.useCallback(() => {
    setHasSidebar(true);
    return () => setHasSidebar(false);
  }, []);

  const registerTopbarCenterContainer = React.useCallback((div: HTMLDivElement) => {
    setTopbarCenterContainer(div);
  }, []);

  const registerUserMenu = React.useCallback(() => {
    setHasUserMenu(true);
    return () => setHasUserMenu(false);
  }, []);

  const registerUserMenuContainer = React.useCallback((div: HTMLDivElement) => {
    setUserMenuContainer(div);
  }, []);

  const contextValue = React.useMemo<LayoutContextType>(
    () => ({
      topbar: {
        exists: hasTopbar,
        centerPortal: topbarCenterContainer,
        register: registerTopbar,
        registerCenterPortal: registerTopbarCenterContainer
      },
      sidebar: {
        exists: hasSidebar,
        opened: sidebarOpened,
        register: registerSidebar,
        toogleOpened: toogleSidebarOpened,
        trueOpened: trueSidebarOpened,
        falseOpened: falseSidebarOpened
      },
      userMenu: {
        opened: userMenuOpened,
        containerPortal: userMenuContainer,
        exists: hasUserMenu,
        register: registerUserMenu,
        registerContainerPortal: registerUserMenuContainer,
        toogleOpened: toogleUserMenuOpened,
        trueOpened: trueUserMenuOpened,
        falseOpened: falseUserMenuOpened
      }
    }),
    [
      falseSidebarOpened,
      falseUserMenuOpened,
      hasSidebar,
      hasTopbar,
      hasUserMenu,
      registerSidebar,
      registerTopbar,
      registerTopbarCenterContainer,
      registerUserMenu,
      registerUserMenuContainer,
      sidebarOpened,
      toogleSidebarOpened,
      toogleUserMenuOpened,
      topbarCenterContainer,
      trueSidebarOpened,
      trueUserMenuOpened,
      userMenuContainer,
      userMenuOpened
    ]
  );

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className={cx(className, { 'ui-eduzz-layout-has-topbar': hasTopbar })} {...rest}>
        {children}
      </div>
    </LayoutContext.Provider>
  );
};

const LayoutWrapper = styled(Layout, { label: 'ui-eduzz-layout' })`
  display: flex;
  width: 100%;
  min-height: 100vh;

  &.ui-eduzz-layout-has-topbar {
    padding-top: ${TOPBAR_HEIGHT / 16}rem;
  }
`;

export default nestedComponent(LayoutWrapper, {
  Sidebar,
  Content,
  Topbar
});
