import { HTMLAttributes, ReactNode, MemoExoticComponent } from 'react';

export type LayoutProps = HTMLAttributes<HTMLDivElement> & {
    className?: string;
    children?: ReactNode | MemoExoticComponent<any>;
    primaryColor?: `#${string}`;
    secondaryColor?: `#${string}`;
    mode?: 'light' | 'dark';
    persistMode?: boolean;
    acceptModeBySearchParam?: boolean;
    onModeChange?: (newMode: 'light' | 'dark') => void;
};
declare const _default: import('react').ComponentType<LayoutProps> & {
    Sidebar: import('react').ComponentType<import('../Sidebar').SidebarProps> & {
        Item: MemoExoticComponent<import('react').ForwardRefExoticComponent<Omit<import('../Sidebar/Item').SidebarItemProps, "ref"> & import('react').RefAttributes<HTMLElement>>>;
        Group: MemoExoticComponent<import('react').ForwardRefExoticComponent<import('../Sidebar/Group').SidebarGroupProps & import('react').RefAttributes<HTMLLIElement>>>;
    };
    Content: ({ children, disablePadding }: import('../Content').LayoutContentProps) => import("react/jsx-runtime").JSX.Element;
    Topbar: import('react').ComponentType<import('../Topbar').TopbarProps> & {
        Action: MemoExoticComponent<import('react').ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
            active?: boolean;
            tooltip?: string;
            icon: React.ReactNode;
            right?: React.ReactNode;
            label?: React.ReactNode;
            badgeCount?: number;
            badgeDot?: boolean;
            onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
        } & import('react').RefAttributes<HTMLDivElement>>>;
        UnitySupportChat: ({ token }: import('../Topbar/UnitySupportChat').TopbarUnitySupportChatProps) => null;
        HyperflowSupportChat: ({ jwtToHyperflow, helpUser }: import('../Topbar/HyperflowSupportChat').TopbarHyperflowSupportChatProps) => import("react/jsx-runtime").JSX.Element | null;
        UserMenu: ({ children, className, ...rest }: import('../Topbar/UserMenu').UserMenuProps) => import("react/jsx-runtime").JSX.Element | null;
        UserMenuItem: import('react').ForwardRefExoticComponent<Omit<import('../Topbar/UserMenu/Item').UserMenuItemProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
        UserMenuDivider: () => import("react/jsx-runtime").JSX.Element;
        UserMenuGroup: ({ label, children, ...rest }: import('../Topbar/UserMenu/ItemGroup').UserMenuGroupProps) => import("react/jsx-runtime").JSX.Element;
        Search: MemoExoticComponent<({ disableShortcut, disableEscape, onEnter, status, placeholder }: import('../Topbar/Search').TopbarSearchProps) => import("react/jsx-runtime").JSX.Element | null>;
        ModeSwitcher: MemoExoticComponent<({ tooltip, badgeDot }: import('../Topbar/ModeSwitcher').ThemeSwitcherProps) => import("react/jsx-runtime").JSX.Element>;
    };
};
export default _default;
