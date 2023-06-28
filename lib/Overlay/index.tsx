import { HTMLAttributes, ReactNode, MouseEventHandler, useEffect } from 'react';

import useScrollBlock from '../hooks/useScrollBlock';
import cx from '../utils/cx';

import './styles.css';

export type OverlayColor = 'light' | 'dark' | 'auto';

export type OverlayProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  visible: boolean;
  underTopbar?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Overlay = ({ visible, children, underTopbar, ...rest }: OverlayProps) => {
  const { disableScroll, enableScroll } = useScrollBlock();

  useEffect(() => {
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
      className={cx('eduzz-ui-layout-overlay', {
        'eduzz-ui-layout-visible': visible,
        'eduzz-ui-layout-under-topbar': underTopbar
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Overlay;
