import * as React from 'react';

import { cx } from '@emotion/css';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import useScrollBlock from '../hooks/useScrollBlock';

export type OverlayColor = 'light' | 'dark' | 'auto';

export type OverlayProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  visible: boolean;
  underTopbar?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
};

const Overlay = ({ className, visible, children, underTopbar, ...rest }: OverlayProps) => {
  const { disableScroll, enableScroll } = useScrollBlock();

  React.useEffect(() => {
    if (visible) {
      disableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [enableScroll, disableScroll, visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden='true'
      tabIndex={-1}
      className={cx(className, { 'ui-eduzz-visible': visible, 'ui-eduzz-under-topbar': underTopbar })}
      {...rest}
    >
      {children}
    </div>
  );
};

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export default styled(Overlay, { label: 'ui-eduzz-overlay' })`
  background: rgba(255, 255, 255, 0.32);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 106;
  opacity: 0;
  visibility: hidden;
  inset: 0;
  backdrop-filter: blur(0.5rem);
  animation: ${fadeInAnimation} 200ms linear;

  &.ui-eduzz-visible {
    opacity: 1;
    visibility: visible;
  }

  &.ui-eduzz-under-topbar {
    z-index: 104;
  }
`;
