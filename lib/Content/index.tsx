import { ReactNode } from 'react';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';

export interface LayoutContentProps {
  children?: ReactNode;
  disablePadding?: boolean;
  className?: string;
}

const LayoutContent = ({ children, className, disablePadding }: LayoutContentProps) => {
  return <div className={cx(className, { 'ui-eduzz-layout-content-disable-padding': disablePadding })}>{children}</div>;
};

export default styled(LayoutContent, { label: 'ui-eduzz-layout-content' })`
  flex: 1;
  min-width: 0;
  background-color: rgb(252, 252, 252);
  transition: background-color 0.3s;

  &:not(.ui-eduzz-layout-content-disable-padding) {
    padding: 2rem;

    @media (max-width: 767px) {
      padding: 1rem;
    }
  }
`;
