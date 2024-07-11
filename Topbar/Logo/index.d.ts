import { JSXElementConstructor, ReactNode } from 'react';

export interface LogoProps {
    logo?: string | ReactNode;
    logoMobile?: string | ReactNode;
    logoDarkMode?: string | ReactNode;
    logoMobileDarkMode?: string | ReactNode;
    wrapper?: JSXElementConstructor<{
        children: ReactNode;
        className: string;
    }>;
}
declare const Logo: ({ logo, logoMobile, logoDarkMode, logoMobileDarkMode, wrapper: Wrapper }: LogoProps) => import("react/jsx-runtime").JSX.Element;
export default Logo;
