import { ElementType, ReactNode, forwardRef, useCallback, MouseEvent } from 'react';

import { useContextSelector } from 'use-context-selector';

import LayoutContext from '../../../context';

export interface UserMenuItemProps {
  /**
   * Allow to provide more props to the `as` Component
   */
  [key: string]: any;
  /**
   * Component that wraps the item.
   * @example a, NavLink, Link (react-router-dom)
   */
  as?: ElementType;
  icon?: ReactNode;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
  preventClose?: boolean;
  id?: string;
  children: string;
}

const UserMenuItem = forwardRef<HTMLButtonElement, UserMenuItemProps>(
  ({ id, icon, disabled, onClick, children, preventClose, as: Tag, ...rest }, ref) => {
    const close = useContextSelector(LayoutContext, context => context.userMenu.falseOpened);

    const handleClick = useCallback(
      (e: MouseEvent) => {
        onClick && onClick(e);
        !preventClose && close();
      },
      [close, onClick, preventClose]
    );

    let content = (
      <button
        id={id}
        ref={ref}
        onClick={handleClick}
        className='flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 transition hover:bg-[rgba(0,0,0,0.03)] disabled:cursor-not-allowed disabled:opacity-25 [&>.anticon]:text-[20px] [&>svg]:mr-[5px] [&>svg]:w-6'
        disabled={disabled}
      >
        {icon}
        <span className='max-w-[235px] overflow-hidden text-ellipsis whitespace-nowrap text-base'>{children}</span>
      </button>
    );

    if (Tag) {
      content = (
        <Tag id={id} {...rest}>
          {content}
        </Tag>
      );
    }

    return <>{content}</>;
  }
);

export default UserMenuItem;
