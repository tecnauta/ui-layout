import { ReactNode } from 'react';

interface TooltipProps {
    title?: string | undefined;
    children: ReactNode;
}
declare const Tooltip: ({ title, children }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
