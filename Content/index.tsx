import { ReactNode } from 'react';

import cx from '../utils/cx';

export interface LayoutContentProps {
  children?: ReactNode;
  disablePadding?: boolean;
}

const LayoutContent = ({ children, disablePadding }: LayoutContentProps) => {
  return (
    <div
      className={cx(
        'eduzz-ui-layout-content uizz-layout-box-border uizz-layout-min-w-0 uizz-layout-flex-1 uizz-layout-bg-background-3 uizz-layout-transition',
        {
          'uizz-layout-p-4 md:uizz-layout-p-8': !disablePadding
        }
      )}
    >
      {children}
    </div>
  );
};

export default LayoutContent;
