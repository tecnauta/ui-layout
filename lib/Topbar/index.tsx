import { HTMLAttributes, JSXElementConstructor, ReactNode, memo, useEffect, useMemo } from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import Action from './Action';
import Actions from './Actions';
import Apps from './Apps';
import Belt from './Belt';
import TopbarContext, { TopbarContextType } from './context';
import Logo from './Logo';
import Search from './Search';
import UnitySupportChat from './UnitySupportChat';
import User from './User';
import UserMenu from './UserMenu';
import UserMenuDivider from './UserMenu/Divider';
import UserMenuItem from './UserMenu/Item';
import UserMenuGroup from './UserMenu/ItemGroup';
import LayoutContext from '../context';
import IconClose from '../Icons/Close';
import IconMenu from '../Icons/Menu';
import nestedComponent from '../utils/nestedComponent';

export interface TopbarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  disableApps?: boolean;
  logo?: string;
  logoMobile?: string;
  logoDarkMode?: string;
  logoMobileDarkMode?: string;
  logoWrapper?: JSXElementConstructor<{ children: ReactNode; className: string }>;
  currentApplication?: string;
  user?: {
    id?: number;
    name: string;
    email?: string;
    avatar?: string;
    belt?: string;
    tag?: 'lite' | 'pro' | 'unity' | 'partner';
    isClubeBlack?: boolean;
    isSupport?: boolean;
    supportId?: number;
  };
}

const Topbar = memo<TopbarProps>(
  ({
    children,
    currentApplication,
    logo,
    logoMobile,
    logoDarkMode,
    logoMobileDarkMode,
    logoWrapper,
    user,
    disableApps,
    ...rest
  }) => {
    const register = useContextSelector(LayoutContext, context => context.topbar.register);
    const sidebarToogleOpened = useContextSelector(LayoutContext, context => context.sidebar.toogleOpened);
    const registerCenterPortal = useContextSelector(LayoutContext, context => context.topbar.registerCenterPortal);
    const sidebarOpened = useContextSelector(LayoutContext, context => context.sidebar.opened);

    useEffect(() => {
      const unregister = register();
      return () => unregister();
    }, [register]);

    useEffect(() => {
      document.body.classList.add('ui-eduzz-layout-topbar-applied');

      return () => {
        document.body.classList.remove('ui-eduzz-layout-topbar-applied');
      };
    }, []);

    const contextValue = useMemo<TopbarContextType>(() => ({ currentApplication, user }), [currentApplication, user]);

    return (
      <TopbarContext.Provider value={contextValue}>
        <div className='eduzz-ui-layout-topbar' {...rest}>
          <header className='ui-eduzz-layout-topbar-header'>
            {user?.isSupport && <div className='ui-eduzz-layout-topbar-user-support'>Suporte</div>}

            <div className='ui-eduzz-layout-topbar-start'>
              <Action
                className='ui-eduzz-layout-topbar-mobile-menu'
                icon={
                  sidebarOpened ? (
                    <IconClose size={18} />
                  ) : (
                    <IconMenu size={22} className='ui-eduzz-layout-topbar-mobile-menu-icon' />
                  )
                }
                onClick={sidebarToogleOpened}
              />

              {!disableApps && <Apps />}

              <Logo
                logo={logo}
                logoMobile={logoMobile}
                logoDarkMode={logoDarkMode}
                logoMobileDarkMode={logoMobileDarkMode}
                wrapper={logoWrapper}
              />

              {!!user?.tag && (
                <p className={cx('ui-eduzz-layout-topbar-tag', `ui-eduzz-layout-topbar-tag-${user.tag}`)}>{user.tag}</p>
              )}
            </div>

            <div className='ui-eduzz-layout-topbar-center' ref={registerCenterPortal} />

            <div className='ui-eduzz-layout-topbar-quick-access'>
              <Belt />
              <Actions>{children}</Actions>
              <User />
            </div>
          </header>
        </div>
      </TopbarContext.Provider>
    );
  }
);
export default nestedComponent(Topbar, {
  Action,
  UnitySupportChat,
  UserMenu,
  UserMenuItem,
  UserMenuDivider,
  UserMenuGroup,
  Search
});
