import { forwardRef, memo, useEffect } from 'react';

import { useContext } from 'use-context-selector';

import Badge from '../../Badge';
import Tooltip from '../../Tooltip';
import cx from '../../utils/cx';
import TopbarActionsContext from '../Actions/context';

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
        className={cx('group/action [&_.anticon]:align-text-bottom [&_.anticon]:text-[20px]', className, {
          '--active': active
        })}
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        <Tooltip title={tooltip}>
          <Badge count={badgeCount === 0 ? undefined : badgeCount} dot={badgeCount ? false : badgeDot}>
            <div className='mt-0.5 box-border flex h-10 min-w-[40px] cursor-pointer select-none items-center justify-center gap-2 rounded-[20px] px-2 py-0 text-center transition hover:bg-[rgba(0,0,0,0.03)] group-[.--active]/action:bg-[rgba(0,0,0,0.03)]'>
              {icon}
              <span className='eduzz-ui-layout-topbar-action-button-text hidden max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap empty:hidden md:block'>
                {label}
              </span>
              {right}
            </div>
          </Badge>
        </Tooltip>
      </div>
    );
  }
);

export default memo(Action);
