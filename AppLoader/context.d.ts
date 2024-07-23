export type AppLoaderContextValue = {
    show(): void;
    error(error: any, tryAgain: () => void): void;
    hide(): void;
};
export declare const AppLoaderContext: import('react').Context<AppLoaderContextValue>;
export declare function useAppLoader(): AppLoaderContextValue;
export default AppLoaderContext;
