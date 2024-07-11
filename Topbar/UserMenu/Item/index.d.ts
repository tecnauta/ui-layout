import { ElementType, ReactNode, MouseEvent } from 'react';

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
    className?: string;
}
declare const UserMenuItem: import('react').ForwardRefExoticComponent<Omit<UserMenuItemProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
export default UserMenuItem;
