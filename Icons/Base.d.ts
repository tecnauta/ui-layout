import { SVGAttributes } from 'react';

export type IconSizes = 'sm' | 'md' | 'lg';
export type BaseIconProps = Omit<SVGAttributes<SVGElement>, 'width' | 'height'> & {
    /**
     * Defaults to 'md' (24px or 1.5rem)
     */
    size?: IconSizes | number;
};
declare const BaseIcon: import('react').ForwardRefExoticComponent<Omit<SVGAttributes<SVGElement>, "width" | "height"> & {
    /**
     * Defaults to 'md' (24px or 1.5rem)
     */
    size?: IconSizes | number;
} & import('react').RefAttributes<SVGSVGElement>>;
export default BaseIcon;
