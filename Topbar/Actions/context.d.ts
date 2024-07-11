export interface TopbarActionsContextType {
    (action: {
        badgeDot: boolean;
        badgeCount: number;
    }): () => void;
}
declare const TopbarActionsContext: import('use-context-selector').Context<TopbarActionsContextType>;
export default TopbarActionsContext;
