import { ReactNode } from 'react';

type LogoProps = {
    logo?: ReactNode | string;
    logoDarkMode?: ReactNode | string;
};
declare const Logo: ({ logo, logoDarkMode }: LogoProps) => import("react/jsx-runtime").JSX.Element;
export default Logo;
