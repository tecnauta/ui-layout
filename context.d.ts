export declare const TOPBAR_HEIGHT = 64;
export declare const TOPBAR_DROPDOWN_WIDTH = 336;
export declare const TOPBAR_MENU_MIN_WIDTH_IN_PX = 260;
export declare const MENU_WIDTH = 248;
export interface LayoutContextType {
    layout: {
        mode: 'light' | 'dark';
        toggle(): void;
    };
    topbar: {
        exists: boolean;
        centerPortal: HTMLDivElement | null;
        register(): () => void;
        registerCenterPortal(container: HTMLDivElement): void;
    };
    sidebar: {
        exists: boolean;
        opened: boolean;
        register(): () => void;
        toogleOpened(): void;
        trueOpened(): void;
        falseOpened(): void;
    };
    userMenu: {
        exists: boolean;
        opened: boolean;
        containerPortal: HTMLDivElement | null;
        register(): () => void;
        registerContainerPortal(container: HTMLDivElement): void;
        toogleOpened(): void;
        trueOpened(): void;
        falseOpened(): void;
    };
}
declare const LayoutContext: import('use-context-selector').Context<LayoutContextType>;
export default LayoutContext;
