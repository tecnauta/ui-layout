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
        'eduzz-ui-tw-invisible eduzz-ui-tw-fixed eduzz-ui-tw-inset-0 eduzz-ui-tw-z-[106] eduzz-ui-tw-h-screen eduzz-ui-tw-w-screen eduzz-ui-tw-bg-[rgba(255,255,255,0.32)] eduzz-ui-tw-opacity-0 eduzz-ui-tw-backdrop-blur eduzz-ui-tw-transition',
        {
          '!eduzz-ui-tw-visible eduzz-ui-tw-opacity-100': visible,
          '!eduzz-ui-tw-z-[104]': underTopbar
        }
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Overlay;
