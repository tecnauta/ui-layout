import { ReactNode } from 'react';

export interface CollapseProps {
    id?: string;
    visibled: boolean;
    children?: ReactNode;
}
declare const CollapseEffect: ({ children, visibled, id }: CollapseProps) => import("react/jsx-runtime").JSX.Element;
export default CollapseEffect;
