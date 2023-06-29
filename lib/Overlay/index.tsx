import { HTMLAttributes, ReactNode, MouseEventHandler, useEffect } from 'react';

import useScrollBlock from '../hooks/useScrollBlock';
import cx from '../utils/cx';

export type OverlayColor = 'light' | 'dark' | 'auto';

export type OverlayProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  visible: boolean;
  underTopbar?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Overlay = ({ visible, children, underTopbar, className, ...rest }: OverlayProps) => {
  const { disableScroll, enableScroll } = useScrollBlock();

  useEffect(() => {
    if (visible) {
      disableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [enableScroll, disableScroll, visible]);

  return (
    <div
      aria-hidden='true'
      tabIndex={-1}
      className={cx(
        className,
        'invisible fixed inset-0 z-[106] h-screen w-screen bg-[rgba(255,255,255,0.32)] opacity-0 backdrop-blur transition',
        {
          '!visible opacity-100': visible,
          '!z-[104]': underTopbar
        }
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Overlay;
