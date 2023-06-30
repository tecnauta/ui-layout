import { ReactNode } from 'react';

import cx from '../utils/cx';

export interface LayoutContentProps {
  children?: ReactNode;
  disablePadding?: boolean;
}

const LayoutContent = ({ children, disablePadding }: LayoutContentProps) => {
  return (
    <div
      className={cx('eduzz-ui-tw-min-w-0 eduzz-ui-tw-flex-1 eduzz-ui-tw-bg-[rgb(252,252,252)] eduzz-ui-tw-transition', {
        'eduzz-ui-tw-md:p-8 eduzz-ui-tw-p-4': !disablePadding
      })}
    >
      {children}
    </div>
  );
};

export default LayoutContent;
