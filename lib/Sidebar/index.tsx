import { ReactNode, useEffect, useMemo } from 'react';

import { useContextSelector } from 'use-context-selector';

import SidebarContext, { SidebarContextType } from './context';
import Group from './Group';
import Item from './Item';
import LayoutContext from '../context';
import { useMediaQueryDown } from '../hooks/useMediaQuery';
import Overlay from '../Overlay';
import cx from '../utils/cx';
import nestedComponent from '../utils/nestedComponent';

import './styles.css';

export interface SidebarProps {
  /**
   * Current location path, if you are using `react-router-dom` use `useLocation`
   */
  currentLocation: string;
  children: ReactNode;
}

const Sidebar = ({ currentLocation, children }: SidebarProps) => {
  const isMobile = useMediaQueryDown('lg');

  const hasTopbar = useContextSelector(LayoutContext, context => context.topbar.exists);
  const register = useContextSelector(LayoutContext, context => context.sidebar.register);
  const opened = useContextSelector(LayoutContext, context => context.sidebar.opened);
  const toggleMenu = useContextSelector(LayoutContext, context => context.sidebar.toogleOpened);
  const falseOpened = useContextSelector(LayoutContext, context => context.sidebar.falseOpened);

  useEffect(() => {
    const unregister = register();
    return () => unregister();
  }, [register]);

  const contextValue = useMemo<SidebarContextType>(
    () => ({
      isActiveItem: (path?: string) => (!path ? false : path === currentLocation)
    }),
    [currentLocation]
  );

  useEffect(() => {
    falseOpened();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        className={cx('eduzz-ui-layout-sidebar', {
          'eduzz-ui-layout-sidebar-visible': opened && isMobile,
          'eduzz-ui-layout-sidebar-has-topbar': hasTopbar
        })}
      >
        <Overlay visible={opened && isMobile} onClick={toggleMenu} underTopbar />

        <aside className='eduzz-ui-layout-sidebar-container'>
          <nav>
            <ul>{children}</ul>
          </nav>
        </aside>
      </div>
    </SidebarContext.Provider>
  );
};

export default nestedComponent(Sidebar, {
  Item,
  Group
});
