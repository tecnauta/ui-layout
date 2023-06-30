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
      <div className='eduzz-ui-tw-relative eduzz-ui-tw-h-auto xl:eduzz-ui-tw-w-[var(--eduzz-ui-layout-sidebar-width-rem)]'>
        <Overlay visible={opened} className='xl:eduzz-ui-tw-hidden' onClick={toggleMenu} underTopbar />

        <aside
          className={cx(
            'eduzz-ui-tw-fixed eduzz-ui-tw-inset-y-0 eduzz-ui-tw-left-[calc(var(--eduzz-ui-layout-sidebar-width-rem)*-1)] eduzz-ui-tw-z-[104] eduzz-ui-tw-inline-flex eduzz-ui-tw-w-[var(--eduzz-ui-layout-sidebar-width-rem)] eduzz-ui-tw-grow eduzz-ui-tw-flex-col eduzz-ui-tw-bg-white eduzz-ui-tw-shadow-[0px_4px_8px_rgba(0,0,0,0.16)] eduzz-ui-tw-transition-all xl:eduzz-ui-tw-left-0 xl:eduzz-ui-tw-bg-[rgb(252,252,252)]  xl:eduzz-ui-tw-shadow-none',
            {
              'eduzz-ui-tw-top-[var(--eduzz-ui-layout-topbar-height-rem)]': hasTopbar,
              '!eduzz-ui-tw-left-0': opened
            }
          )}
        >
          <nav className='eduzz-ui-tw-overflow-y-auto eduzz-ui-tw-overflow-x-hidden eduzz-ui-tw-px-0 eduzz-ui-tw-pb-10 eduzz-ui-tw-pt-8 [&::-webkit-scrollbar-thumb]:eduzz-ui-tw-rounded [&::-webkit-scrollbar-thumb]:eduzz-ui-tw-bg-transparent [&::-webkit-scrollbar]:eduzz-ui-tw-w-[3px] [&::-webkit-scrollbar]:eduzz-ui-tw-bg-transparent [&:hover::-webkit-scrollbar-thumb]:eduzz-ui-tw-bg-[#e0e0e0]'>
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
