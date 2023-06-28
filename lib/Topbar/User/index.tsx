import { memo, useRef } from 'react';

import { CaretDownOutlined } from '@ant-design/icons';

import { useContextSelector } from 'use-context-selector';

import Avatar from '../../Avatar';
import LayoutContext from '../../context';
import useClickOutside from '../../hooks/useClickOutside';
import useEscapeKey from '../../hooks/useEscapeKey';
import cx from '../../utils/cx';
import Action from '../Action';
import TopbarContext from '../context';

import './style.css';

const User = memo(() => {
  const wrapperMenuUser = useRef<HTMLDivElement>(null);
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
    <div
      ref={wrapperMenuUser}
      className={cx('eduzz-ui-layout-topbar-user', {
        'eduzz-ui-layout-topbar-user-active': hasMenu && opened,
        'eduzz-ui-layout-topbar-user-has-menu': hasMenu
      })}
    >
      <Action
        className='eduzz-ui-layout-topbar-user-menu-action'
        icon={<Avatar src={user.avatar}>{user.name}</Avatar>}
        right={hasMenu && <CaretDownOutlined className='eduzz-ui-layout-topbar-user-menu-arrow' />}
        label={`${user.name} ${user.isSupport ? '(Suporte)' : ''}`.trim()}
        onClick={toogleOpened}
      />

      <div ref={registerContainer} />
    </div>
  );
});

export default User;
