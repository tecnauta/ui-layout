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
        className='eduzz-ui-tw-flex eduzz-ui-tw-cursor-pointer eduzz-ui-tw-items-center eduzz-ui-tw-gap-2 eduzz-ui-tw-rounded-md eduzz-ui-tw-px-4 eduzz-ui-tw-py-2 eduzz-ui-tw-transition hover:eduzz-ui-tw-bg-[rgba(0,0,0,0.03)] disabled:eduzz-ui-tw-cursor-not-allowed disabled:eduzz-ui-tw-opacity-25 [&>.anticon]:eduzz-ui-tw-text-[20px] [&>svg]:eduzz-ui-tw-mr-[5px] [&>svg]:eduzz-ui-tw-w-6'
        disabled={disabled}
      >
        {icon}
        <span className='eduzz-ui-tw-max-w-[235px] eduzz-ui-tw-overflow-hidden eduzz-ui-tw-text-ellipsis eduzz-ui-tw-whitespace-nowrap eduzz-ui-tw-text-base'>
          {children}
        </span>
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
