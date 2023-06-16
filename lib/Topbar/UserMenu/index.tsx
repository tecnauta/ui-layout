import * as React from 'react';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import { useContextSelector } from 'use-context-selector';

import { TOPBAR_HEIGHT, TOPBAR_MENU_MIN_WIDTH_IN_PX } from '../..';
import LayoutContext from '../../context';
import Portal from '../../Portal';

export type UserMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

const UserMenu = ({ className, children, ...rest }: UserMenuProps) => {
  const opened = useContextSelector(LayoutContext, context => context.userMenu.opened);
  const register = useContextSelector(LayoutContext, context => context.userMenu.register);
  const container = useContextSelector(LayoutContext, context => context.userMenu.containerPortal);

  React.useEffect(() => {
    const unregister = register();
    return () => unregister();
  }, [register]);

  if (!container) return null;

  return (
    <Portal target={container}>
      <div className={cx(className, opened && 'ui-eduzz-topbar-user-menu-opened')} {...rest}>
        {children}
      </div>
    </Portal>
  );
};

export default styled(UserMenu, { label: 'ui-eduzz-topbar-user-menu' })`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: ${TOPBAR_MENU_MIN_WIDTH_IN_PX / 16}rem;
  max-height: calc(95vh - ${TOPBAR_HEIGHT / 16}rem);
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: ${TOPBAR_HEIGHT / 16}rem;
  right: 0.5rem;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.16);
  padding: 0.5rem;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  user-select: none;
  background: rgb(255, 255, 255);
  border-radius: 0 0 0.5rem 0.5rem;

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

  &.ui-eduzz-topbar-user-menu-opened {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    user-select: auto;
  }
`;
