import { ReactNode } from 'react';

import cx from '../utils/cx';

export interface CollapseProps {
  id?: string;
  visibled: boolean;
  children?: ReactNode;
}

const CollapseEffect = ({ children, visibled, id }: CollapseProps) => {
  return (
    <div id={id} className={cx('uizz-layout-h-0 uizz-layout-overflow-hidden', { '!uizz-layout-h-auto': visibled })}>
      {children}
    </div>
  );
};

export default CollapseEffect;
