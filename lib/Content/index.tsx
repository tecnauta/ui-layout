import { ReactNode } from 'react';

import cx from '../utils/cx';

export interface LayoutContentProps {
  children?: ReactNode;
  disablePadding?: boolean;
}

const LayoutContent = ({ children, disablePadding }: LayoutContentProps) => {
  return (
    <div className={cx('min-w-0 flex-1 bg-[rgb(252,252,252)] transition', { 'p-4 md:p-8': !disablePadding })}>
      {children}
    </div>
  );
};

export default LayoutContent;
