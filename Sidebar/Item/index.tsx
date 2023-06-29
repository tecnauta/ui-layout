import { ReactNode, ElementType, forwardRef, useEffect, createElement, memo } from 'react';

import { useContextSelector } from 'use-context-selector';

import IconBullet from '../../Icons/Bullet';
import IconExternalLink from '../../Icons/ExternalLink';
import cx from '../../utils/cx';
import SidebarContext from '../context';
import SidebarGroupContext from '../Group/context';

import './styles.css';

export interface SidebarItemProps {
  [key: string]: any;
  id?: string;
  tabIndex?: number;
  isActive?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: ElementType;
}

const SidebarItem = forwardRef<HTMLElement, SidebarItemProps>(
  ({ children, isActive: isActiveProp, tabIndex, as: Component, disabled, to, isExternal, ...rest }, ref) => {
    isExternal = isExternal ?? rest?.target === '_blank';
    const isActiveItem = useContextSelector(SidebarContext, context => context.isActiveItem);
    const onItemActive = useContextSelector(SidebarGroupContext, context => context.onItemActive);

    const active = isActiveProp ?? isActiveItem(to);

    useEffect(() => {
      if (!active) return;
      onItemActive();
    }, [active, onItemActive]);

    return createElement(
      Component ?? 'a',
      {
        ...rest,
        ref,
        to,
        tabIndex: tabIndex ?? 1,
        className: cx('eduzz-ui-layout-sidebar-item', {
          'eduzz-ui-layout-sidebar-item-active': active,
          'eduzz-ui-layout-sidebar-item-disabled': disabled
        })
      },
      <li>
        <IconBullet className='eduzz-ui-layout-sidebar-item-icon' size='md' />

        <div className='eduzz-ui-layout-sidebar-item-label-wrapper'>
          <span className='eduzz-ui-layout-sidebar-item-label'>{children}</span>
          {isExternal && <IconExternalLink className='eduzz-ui-layout-sidebar-item-label-external' size={20} />}
        </div>
      </li>
    );
  }
);

export default memo(SidebarItem);
