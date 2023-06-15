import { ReactNode } from 'react';

import { css, cx } from '@emotion/css';
import styled from '@emotion/styled';

import { mediaQuery } from '../hooks/useMediaQuery';

export interface LayoutContentProps {
  children?: ReactNode;
  disablePadding?: boolean;
  className?: string;
}

const LayoutContent = ({ children, className, disablePadding }: LayoutContentProps) => {
  return (
    <div className={cx(className, { 'ui-eduzz-sidebar-content-disable-padding': disablePadding })}>{children}</div>
  );
};

export default styled(LayoutContent, { label: 'ui-eduzz-sidebar-content' })(
  ({ theme }) => css`
    flex: 1;
    min-width: 0;
    background-color: ${theme.antd.colorBgLayout};
    transition: background-color 0.3s;

    &:not(.ui-eduzz-sidebar-content-disable-padding) {
      padding: 2rem;

      ${mediaQuery.down('sm')} {
        padding: 1rem;
      }
    }
  `
);
