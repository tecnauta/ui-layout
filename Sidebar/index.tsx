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
      <div className='eduzz-ui-layout-sidebar uizz-layout-relative uizz-layout-box-border uizz-layout-h-auto uizz-layout-text-content-6 xl:uizz-layout-w-[var(--eduzz-ui-layout-sidebar-width-rem)]'>
        <Overlay visible={opened} className='xl:uizz-layout-hidden' onClick={toggleMenu} underTopbar />

        <aside
          className={cx(
            'uizz-layout-fixed uizz-layout-inset-y-0 uizz-layout-left-[calc(var(--eduzz-ui-layout-sidebar-width-rem)*-1)] uizz-layout-z-[104] uizz-layout-inline-flex uizz-layout-w-[var(--eduzz-ui-layout-sidebar-width-rem)] uizz-layout-grow uizz-layout-flex-col uizz-layout-bg-background-4 uizz-layout-shadow-[0px_4px_8px_rgb(var(--eduzz-ui-layout-content-color-6)_/_0.16)] uizz-layout-transition-all xl:uizz-layout-left-0 xl:uizz-layout-bg-background-3  xl:uizz-layout-shadow-none',
            {
              'uizz-layout-top-[var(--eduzz-ui-layout-topbar-height-rem)]': hasTopbar,
              '!uizz-layout-left-0': opened
            }
          )}
        >
          <nav className='uizz-layout-overflow-y-auto uizz-layout-overflow-x-hidden uizz-layout-px-0 uizz-layout-pb-10 uizz-layout-pt-8 [&::-webkit-scrollbar-thumb]:uizz-layout-rounded [&::-webkit-scrollbar-thumb]:uizz-layout-bg-transparent [&::-webkit-scrollbar]:uizz-layout-w-[3px] [&::-webkit-scrollbar]:uizz-layout-bg-transparent [&:hover::-webkit-scrollbar-thumb]:uizz-layout-bg-[#e0e0e0]'>
            <ul className='uizz-layout-m-0 uizz-layout-block uizz-layout-p-0'>{children}</ul>
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
