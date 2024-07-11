export interface SidebarContextType {
    isActiveItem: (to?: string) => boolean;
}
declare const SidebarContext: import('use-context-selector').Context<SidebarContextType>;
export default SidebarContext;
