import { ReactNode, useEffect, useMemo } from 'react';

import { useContextSelector } from 'use-context-selector';

import SidebarContext, { SidebarContextType } from './context';
import Group from './Group';
import Item from './Item';
import LayoutContext from '../context';
import Overlay from '../Overlay';
import cx from '../utils/cx';
import nestedComponent from '../utils/nestedComponent';

export interface SidebarProps {
  /**
   * Current location path, if you are using `react-router-dom` use `useLocation`
   */
  currentLocation: string;
  children: ReactNode;
}

const Sidebar = ({ currentLocation, children }: SidebarProps) => {
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
      <div className='relative h-auto xl:w-[var(--eduzz-ui-layout-sidebar-width-rem)]'>
        <Overlay visible={opened} className='xl:hidden' onClick={toggleMenu} underTopbar />

        <aside
          className={cx(
            'fixed inset-y-0 left-[calc(var(--eduzz-ui-layout-sidebar-width-rem)*-1)] z-[104] inline-flex w-[var(--eduzz-ui-layout-sidebar-width-rem)] grow flex-col bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.16)] transition-all xl:left-0 xl:bg-[rgb(252,252,252)]  xl:shadow-none',
            {
              'top-[var(--eduzz-ui-layout-topbar-height-rem)]': hasTopbar,
              '!left-0': opened
            }
          )}
        >
          <nav className='overflow-y-auto overflow-x-hidden px-0 pb-10 pt-8 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar]:bg-transparent [&:hover::-webkit-scrollbar-thumb]:bg-[#e0e0e0]'>
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
