import { TopbarApplication } from '..';
import { HTMLAttributes } from 'react';

export type AppsDropdownProps = HTMLAttributes<HTMLDivElement> & {
    currentApplication: string | undefined;
    applications: TopbarApplication[] | undefined;
    opened: boolean;
    onClose: () => void;
};
declare const AppsDropdown: import('react').NamedExoticComponent<AppsDropdownProps>;
export default AppsDropdown;
