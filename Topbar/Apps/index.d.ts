import { HTMLAttributes } from 'react';

export type TopbarApplication = HTMLAttributes<HTMLDivElement> & {
    application: string;
    label: string;
    icon: string;
    beta?: boolean;
    description?: string;
    url: string;
};
type TopbarAppsProps = {
    id?: string;
};
declare const TopbarApps: import('react').NamedExoticComponent<TopbarAppsProps>;
export default TopbarApps;
