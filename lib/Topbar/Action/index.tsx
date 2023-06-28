import { forwardRef, memo, useEffect } from 'react';

import { Badge, Tooltip } from 'antd';

import { useContext } from 'use-context-selector';

import cx from '../../utils/cx';
import TopbarActionsContext from '../Actions/context';

import './style.css';

export type ActionProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * If `true`, the item will be highlighted.
   */
  active?: boolean;
  tooltip?: string;
  icon: React.ReactNode;
  right?: React.ReactNode;
  label?: React.ReactNode;
  badgeCount?: number;
  badgeDot?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const Action = forwardRef<HTMLDivElement, ActionProps>(
  ({ active, icon, right, label, onClick, tooltip, className, badgeCount, badgeDot, ...rest }, ref) => {
    const registerAction = useContext(TopbarActionsContext);

    useEffect(() => {
      const unregister = registerAction({ badgeCount: badgeCount ?? 0, badgeDot: badgeDot ?? false });
      return () => unregister();
    }, [badgeCount, badgeDot, registerAction]);

    return (
      <div
        className={cx('eduzz-ui-layout-topbar-action', className, { '--eduzz-ui-layout-active': active })}
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        <Tooltip title={tooltip}>
          <Badge count={badgeCount === 0 ? undefined : badgeCount} dot={badgeCount ? false : badgeDot} offset={[-4, 8]}>
            <div className='eduzz-ui-layout-topbar-action-button'>
              {icon}
              <span className='eduzz-ui-layout-topbar-action-button-text'>{label}</span>
              {right}
            </div>
          </Badge>
        </Tooltip>
      </div>
    );
  }
);

export default memo(Action);
