/// <reference types="react" />
export type ActionProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * If `true`, the item will be highlighted.
     */
    active?: boolean;
    tooltip?: string;
    icon: React.ReactNode;
    right?: React.ReactNode;
    label?: React.ReactNode;
    badgeCount?: number;
    badgeDot?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
declare const _default: import('react').MemoExoticComponent<import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLDivElement> & {
    /**
     * If `true`, the item will be highlighted.
     */
    active?: boolean | undefined;
    tooltip?: string | undefined;
    icon: import('react').ReactNode;
    right?: import('react').ReactNode;
    label?: import('react').ReactNode;
    badgeCount?: number | undefined;
    badgeDot?: boolean | undefined;
    onClick?: ((event: import('react').MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
} & import('react').RefAttributes<HTMLDivElement>>>;
export default _default;
