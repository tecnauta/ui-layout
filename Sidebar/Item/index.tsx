import * as React from 'react';

import { Typography } from 'antd';

import { cx } from '@emotion/css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useContextSelector } from 'use-context-selector';

import IconBullet from '../../Icons/Bullet';
import IconExternalLink from '../../Icons/ExternalLink';
import SidebarContext from '../context';
import SidebarGroupContext from '../Group/context';

export interface SidebarItemProps {
  [key: string]: any;
  id?: string;
  tabIndex?: number;
  isActive?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
}

const SidebarItem = React.forwardRef<HTMLElement, SidebarItemProps>(
  (
    { className, children, isActive: isActiveProp, tabIndex, as: Component, disabled, to, isExternal, ...rest },
    ref
  ) => {
    isExternal = isExternal ?? rest?.target === '_blank';
    const isActiveItem = useContextSelector(SidebarContext, context => context.isActiveItem);
    const onItemActive = useContextSelector(SidebarGroupContext, context => context.onItemActive);

    const active = isActiveProp ?? isActiveItem(to);

    React.useEffect(() => {
      if (!active) return;
      onItemActive();
    }, [active, onItemActive]);

    return React.createElement(
      Component ?? 'a',
      {
        ...rest,
        ref,
        to,
        tabIndex: tabIndex ?? 1,
        className: cx(className, { 'ui-eduzz-sidebar-item-active': active, 'ui-eduzz-sidebar-item-disabled': disabled })
      },
      <li>
        <IconBullet className='ui-eduzz-sidebar-item-icon' size='md' />

        <div className='ui-eduzz-sidebar-item-label-wrapper'>
          <Typography.Text className='ui-eduzz-sidebar-item-label' strong={active}>
            {children}
          </Typography.Text>
          {isExternal && <IconExternalLink className='ui-eduzz-sidebar-item-label-external' size={20} />}
        </div>
      </li>
    );
  }
);

export default styled(React.memo(SidebarItem), { label: 'ui-eduzz-sidebar-item' })(
  ({ theme }) => css`
    transition: 0.15s linear;
    display: block;
    outline: none;
    user-select: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-right: 5px;

    &:focus-visible {
      background-color: ${theme.antd.colorBgTextHover};
      box-shadow: 0 0 0 2px #039be5 inset;
    }

    &:hover,
    &:active {
      background-color: ${theme.antd.colorBgTextHover};
    }

    & > li {
      padding: 0.07rem 1rem;
      align-items: center;
      line-height: 1.2;
      cursor: pointer;
      display: grid;
      grid-template-columns: ${theme.pxToRem(26)}rem 1fr;
      grid-gap: 0.5rem;
      text-decoration: none;
      white-space: nowrap;
      transition: 0.3s;

      ${theme.mediaQuery.down('lg')} {
        padding: 0.3rem 1rem;
      }

      & .ui-eduzz-sidebar-item-label-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & .ui-eduzz-sidebar-item-label {
          grid-column: 2;
          transition: 0.15s ease-in;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
          font-size: 15.5px;
        }

        & .ui-eduzz-sidebar-item-label-external {
          fill: ${theme.antd.colorText};
          opacity: 0.5;
        }
      }

      & .ui-eduzz-sidebar-item-icon {
        transform: scale(0);
        opacity: 0;
        transition: 0.15s ease-in;
        color: ${theme.secondaryColor};
      }
    }

    &.ui-eduzz-sidebar-item-active > li {
      &::before {
        background: ${theme.secondaryColor};
      }

      & .ui-eduzz-sidebar-item-icon {
        transform: scale(1);
        opacity: 1;
      }
    }

    &.ui-eduzz-sidebar-item-disabled {
      opacity: 0.32;
      pointer-events: none;
    }
  `
);
