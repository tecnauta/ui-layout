import * as React from 'react';

import { CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import { useContextSelector } from 'use-context-selector';

import LayoutContext from '../../context';
import useClickOutside from '../../hooks/useClickOutside';
import useEscapeKey from '../../hooks/useEscapeKey';
import { mediaQuery } from '../../hooks/useMediaQuery';
import TopbarContext from '../context';

const User = React.memo(({ className }: { className?: string }) => {
  const wrapperMenuUser = React.useRef<HTMLDivElement>(null);
  const user = useContextSelector(TopbarContext, context => context.user);

  const opened = useContextSelector(LayoutContext, context => context.userMenu.opened);
  const hasMenu = useContextSelector(LayoutContext, context => context.userMenu.exists);
  const toogleOpened = useContextSelector(LayoutContext, context => context.userMenu.toogleOpened);
  const falseOpened = useContextSelector(LayoutContext, context => context.userMenu.falseOpened);
  const registerContainer = useContextSelector(LayoutContext, context => context.userMenu.registerContainerPortal);

  useClickOutside(wrapperMenuUser, () => hasMenu && falseOpened(), [hasMenu]);
  useEscapeKey(() => hasMenu && falseOpened(), [hasMenu]);

  if (!user) {
    return null;
  }

  return (
    <>
      <div
        ref={wrapperMenuUser}
        className={cx(className, {
          'ui-eduzz-topbar-user-active': hasMenu && opened,
          'ui-eduzz-topbar-user-has-menu': hasMenu
        })}
      >
        <div className='ui-eduzz-topbar-user-label'>
          <div className='ui-eduzz-topbar-user-default'>
            <Button
              className='ui-eduzz-topbar-user-button'
              icon={<Avatar src={user.avatar}>{user.name?.charAt(0)}</Avatar>}
              type='text'
              shape='round'
              onClick={toogleOpened}
            >
              <span className='ui-eduzz-topbar-user-name'>
                {user.name} {!!user.isSupport && '(Suporte)'}
              </span>
              {hasMenu && <CaretDownOutlined className='ui-eduzz-topbar-user-menu-arrow' />}
            </Button>
          </div>

          <div className='ui-eduzz-topbar-user-mobile'>
            <Avatar src={user.avatar} onClick={toogleOpened}>
              {user.name?.charAt(0)}
            </Avatar>
          </div>
        </div>

        <div ref={registerContainer} />
      </div>
    </>
  );
});

export default styled(User, { label: 'ui-eduzz-topbar-user' })`
  position: relative;
  z-index: 1100;
  margin-left: 8px;
  pointer-events: none;

  &.ui-eduzz-topbar-user-has-menu {
    pointer-events: all;
  }

  &.ui-eduzz-topbar-user-active {
    & .ui-eduzz-topbar-user-button {
      background-color: rgba(0, 0, 0, 0.05);
    }

    & .ui-eduzz-topbar-user-menu-arrow {
      transform: rotateX(-180deg);
      margin-bottom: 0;
      margin-top: -5px;
    }
  }

  & .ui-eduzz-topbar-user-default {
    display: none;
    position: relative;

    & .ui-eduzz-topbar-user-button {
      display: flex;
      gap: 5px;
      align-items: center;
      padding: 10.5px 10.5px 10.5px 6px;

      & .ant-avatar {
        background-color: #0d2772;
        text-transform: uppercase;
        cursor: pointer;
        margin-top: 0;
        margin-right: 0;
      }

      & .ui-eduzz-topbar-user-name {
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 16px;
      }

      & .anticon {
        font-size: 12px;
        margin-bottom: -5px;
      }
    }
  }

  ${mediaQuery.up('lg')} {
    & .ui-eduzz-topbar-user-default {
      display: block;
    }

    & .ui-eduzz-topbar-user-mobile {
      display: none;
    }
  }
`;
