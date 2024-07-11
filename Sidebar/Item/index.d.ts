import { ReactNode, ElementType } from 'react';

export interface SidebarItemProps {
    [key: string]: any;
    id?: string;
    tabIndex?: number;
    isActive?: boolean;
    isExternal?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    children: ReactNode;
    className?: string;
    /**
     * Component that wraps the item.
     * @example NavLink, Link (react-router-dom)
     */
    as?: ElementType;
}
declare const _default: import('react').MemoExoticComponent<import('react').ForwardRefExoticComponent<Omit<SidebarItemProps, "ref"> & import('react').RefAttributes<HTMLElement>>>;
export default _default;
