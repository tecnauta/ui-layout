import { HTMLAttributes, ReactNode, MouseEventHandler } from 'react';

export type OverlayColor = 'light' | 'dark' | 'auto';
export type OverlayProps = HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
    visible: boolean;
    underTopbar?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
};
declare const Overlay: ({ visible, children, underTopbar, className, ...rest }: OverlayProps) => import("react/jsx-runtime").JSX.Element;
export default Overlay;
