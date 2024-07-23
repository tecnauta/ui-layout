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
    active?: boolean;
    tooltip?: string;
    icon: React.ReactNode;
    right?: React.ReactNode;
    label?: React.ReactNode;
    badgeCount?: number;
    badgeDot?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
} & import('react').RefAttributes<HTMLDivElement>>>;
export default _default;
