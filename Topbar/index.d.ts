import { HTMLAttributes, JSXElementConstructor, ReactNode } from 'react';

export interface TopbarProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    disableApps?: boolean;
    logo?: string;
    logoMobile?: string;
    logoDarkMode?: string;
    logoMobileDarkMode?: string;
    logoWrapper?: JSXElementConstructor<{
        children: ReactNode;
        className: string;
    }>;
    currentApplication?: string;
    user?: {
        id?: number;
        name: string;
        email?: string;
        avatar?: string;
        belt?: string;
        tag?: 'lite' | 'pro' | 'unity' | 'partner';
        isClubeBlack?: boolean;
        isSupport?: boolean;
        supportId?: number;
        ssid?: string;
    };
}
declare const _default: import('react').ComponentType<TopbarProps> & {
    Action: import('react').MemoExoticComponent<import('react').ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
        active?: boolean | undefined;
        tooltip?: string | undefined;
        icon: ReactNode;
        right?: ReactNode;
        label?: ReactNode;
        badgeCount?: number | undefined;
        badgeDot?: boolean | undefined;
        onClick?: ((event: import('react').MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    } & import('react').RefAttributes<HTMLDivElement>>>;
    UnitySupportChat: ({ token }: import('./UnitySupportChat').TopbarUnitySupportChatProps) => null;
    HyperflowSupportChat: ({ jwtToHyperflow, helpUser }: import('./HyperflowSupportChat').TopbarHyperflowSupportChatProps) => import("react/jsx-runtime").JSX.Element | null;
    UserMenu: ({ children, className, ...rest }: import('./UserMenu').UserMenuProps) => import("react/jsx-runtime").JSX.Element | null;
    UserMenuItem: import('react').ForwardRefExoticComponent<Omit<import('./UserMenu/Item').UserMenuItemProps, "ref"> & import('react').RefAttributes<HTMLButtonElement>>;
    UserMenuDivider: () => import("react/jsx-runtime").JSX.Element;
    UserMenuGroup: ({ label, children, ...rest }: import('./UserMenu/ItemGroup').UserMenuGroupProps) => import("react/jsx-runtime").JSX.Element;
    Search: import('react').MemoExoticComponent<({ disableShortcut, disableEscape, onEnter, status, placeholder }: import('./Search').TopbarSearchProps) => import("react/jsx-runtime").JSX.Element | null>;
    ModeSwitcher: import('react').MemoExoticComponent<({ tooltip, badgeDot }: import('./ModeSwitcher').ThemeSwitcherProps) => import("react/jsx-runtime").JSX.Element>;
};
export default _default;