import { ReactNode, ReactPortal } from 'react';

export interface PortalProps {
    children: ReactNode;
    target: string | HTMLElement;
}
declare const Portal: ({ children, target }: PortalProps) => ReactPortal | null;
export default Portal;
