import { ReactNode } from 'react';

import cx from '../utils/cx';

import './styles.css';

export interface LayoutContentProps {
  children?: ReactNode;
  disablePadding?: boolean;
}

const LayoutContent = ({ children, disablePadding }: LayoutContentProps) => {
  return (
    <div className={cx('eduzz-ui-layout-content', { 'eduzz-ui-layout-content-disable-padding': disablePadding })}>
      {children}
    </div>
  );
};

export default LayoutContent;
