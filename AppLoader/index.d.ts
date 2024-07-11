import { ReactNode } from 'react';

export type AppLoaderProps = {
    children: ReactNode;
    logo?: ReactNode;
    logoDarkMode?: ReactNode;
};
declare const AppLoader: ({ children, logo, logoDarkMode }: AppLoaderProps) => import("react/jsx-runtime").JSX.Element;
export default AppLoader;
