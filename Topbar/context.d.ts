export interface HoustonTopbarUser {
    id?: number;
    name: string;
    email?: string;
    avatar?: string;
    belt?: string;
    isSupport?: boolean;
    supportId?: number;
    isClubeBlack?: boolean;
}
export interface TopbarContextType {
    user?: HoustonTopbarUser;
    currentApplication?: string;
}
declare const TopbarContext: import('use-context-selector').Context<TopbarContextType>;
export default TopbarContext;
