import * as React from 'react';

import cx from '../utils/cx';

export interface CollapseProps {
  id?: string;
  visibled: boolean;
  children?: React.ReactNode;
}

const CollapseEffect = ({ children, visibled, id }: CollapseProps) => {
  return (
    <div id={id} className={cx('h-0 overflow-hidden', { 'h-auto': visibled })}>
      {children}
    </div>
  );
};

export default CollapseEffect;
