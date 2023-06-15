import * as React from 'react';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import { useContextSelector } from 'use-context-selector';

import SidebarContext, { SidebarContextType } from './context';
import Group from './Group';
import Item from './Item';
import { MENU_WIDTH, TOPBAR_HEIGHT } from '..';
import LayoutContext from '../context';
import { mediaQuery, useMediaQueryDown } from '../hooks/useMediaQuery';
import Overlay from '../Overlay';
import nestedComponent from '../utils/nestedComponent';

export interface SidebarProps {
  /**
   * Current location path, if you are using `react-router-dom` use `useLocation`
   */
  currentLocation: string;
  children: React.ReactNode;
  className?: string;
}

const Sidebar = ({ currentLocation, children, className }: SidebarProps) => {
  const isMobile = useMediaQueryDown('lg');

  const hasTopbar = useContextSelector(LayoutContext, context => context.topbar.exists);
  const register = useContextSelector(LayoutContext, context => context.sidebar.register);
  const opened = useContextSelector(LayoutContext, context => context.sidebar.opened);
  const toggleMenu = useContextSelector(LayoutContext, context => context.sidebar.toogleOpened);
  const falseOpened = useContextSelector(LayoutContext, context => context.sidebar.falseOpened);

  React.useEffect(() => {
    const unregister = register();
    return () => unregister();
  }, [register]);

  const contextValue = React.useMemo<SidebarContextType>(
    () => ({
      isActiveItem: (path?: string) => (!path ? false : path === currentLocation)
    }),
    [currentLocation]
  );

  React.useEffect(() => {
    falseOpened();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        className={cx(className, {
          'ui-eduzz-sidebar-visible': opened && isMobile,
          'ui-eduzz-sidebar-has-topbar': hasTopbar
        })}
      >
        <Overlay visible={opened && isMobile} onClick={toggleMenu} underTopbar />

        <aside className='ui-eduzz-sidebar-container'>
          <nav>
            <ul>{children}</ul>
          </nav>
        </aside>
      </div>
    </SidebarContext.Provider>
  );
};

const SidebarStyled = styled(Sidebar, { label: 'ui-eduzz-sidebar' })`
  width: ${MENU_WIDTH}px;
  height: auto;
  position: relative;

  & .ui-eduzz-sidebar-container {
    background-color: ${theme.antd.colorBgLayout};
    display: inline-flex;
    flex-direction: column;
    width: ${MENU_WIDTH}px;
    transition: background-color 0.3s;
    z-index: 104;
    flex-grow: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;

    a {
      text-decoration: none;
    }

    & > nav {
      overflow-y: auto;
      overflow-x: hidden;
      padding: 2rem 0 2.5rem 0;

      &::-webkit-scrollbar {
        width: 3px;
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 4px;
      }

      &:hover::-webkit-scrollbar-thumb {
        background: #e0e0e0;
      }

      ul {
        list-style-type: none;
      }
    }
  }

  &.ui-eduzz-sidebar-has-topbar .ui-eduzz-sidebar-container {
    top: ${TOPBAR_HEIGHT}px;
  }

  ${mediaQuery.down('lg')} {
    width: 0;

    & .ui-eduzz-sidebar-container {
      background-color: ${theme.antd.colorBgElevated};
      left: -${MENU_WIDTH}px;
      border: 0;
      opacity: 0;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
    }

    &.ui-eduzz-sidebar-visible .ui-eduzz-sidebar-container {
      left: 0;
      opacity: 1;
    }
  }
`;

export default nestedComponent(SidebarStyled, {
  Item,
  Group
});
