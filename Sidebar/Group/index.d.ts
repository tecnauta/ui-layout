import { ReactNode } from 'react';

export interface SidebarGroupProps {
    label?: ReactNode;
    children: ReactNode;
    tabIndex?: number;
    id?: string;
    className?: string;
}
declare const _default: import('react').MemoExoticComponent<import('react').ForwardRefExoticComponent<SidebarGroupProps & import('react').RefAttributes<HTMLLIElement>>>;
export default _default;
