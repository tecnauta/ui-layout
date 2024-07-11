import { ReactNode } from 'react';

export interface SidebarProps {
    /**
     * Current location path, if you are using `react-router-dom` use `useLocation`
     */
    currentLocation: string;
    children: ReactNode;
}
declare const _default: import('react').ComponentType<SidebarProps> & {
    Item: import('react').MemoExoticComponent<import('react').ForwardRefExoticComponent<Omit<import('./Item').SidebarItemProps, "ref"> & import('react').RefAttributes<HTMLElement>>>;
    Group: import('react').MemoExoticComponent<import('react').ForwardRefExoticComponent<import('./Group').SidebarGroupProps & import('react').RefAttributes<HTMLLIElement>>>;
};
export default _default;
