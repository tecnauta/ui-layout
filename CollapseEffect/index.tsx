import { ReactNode } from 'react';

import cx from '../utils/cx';

export interface CollapseProps {
  id?: string;
  visibled: boolean;
  children?: ReactNode;
}

const CollapseEffect = ({ children, visibled, id }: CollapseProps) => {
  return (
    <div id={id} className={cx('eduzz-ui-tw-h-0 eduzz-ui-tw-overflow-hidden', { '!eduzz-ui-tw-h-auto': visibled })}>
      {children}
    </div>
  );
};

export default CollapseEffect;
