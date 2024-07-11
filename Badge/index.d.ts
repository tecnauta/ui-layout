import { ReactNode } from 'react';

interface BadgeProps {
    count?: number | undefined | null;
    dot?: boolean | undefined | null;
    children: ReactNode;
}
declare const Badge: ({ children, count, dot }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
