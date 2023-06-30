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
        className={cx('[&_.anticon]:eduzz-ui-tw-align-text-bottom [&_.anticon]:eduzz-ui-tw-text-[20px]', className)}
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        <Tooltip title={tooltip}>
          <Badge count={badgeCount === 0 ? undefined : badgeCount} dot={badgeCount ? false : badgeDot}>
            <div
              className={cx(
                'eduzz-ui-tw-mt-0.5 eduzz-ui-tw-box-border eduzz-ui-tw-flex eduzz-ui-tw-h-10 eduzz-ui-tw-min-w-[40px] eduzz-ui-tw-cursor-pointer eduzz-ui-tw-select-none eduzz-ui-tw-items-center eduzz-ui-tw-justify-center eduzz-ui-tw-gap-2 eduzz-ui-tw-rounded-[20px] eduzz-ui-tw-px-2 eduzz-ui-tw-py-0 eduzz-ui-tw-text-center eduzz-ui-tw-transition hover:eduzz-ui-tw-bg-[rgba(0,0,0,0.03)]',
                { 'eduzz-ui-tw-bg-[rgba(0,0,0,0.03)]': active }
              )}
            >
              {icon}
              <span className='eduzz-ui-layout-topbar-action-button-text max-w-[100px] text-ellipsis eduzz-ui-tw-hidden eduzz-ui-tw-overflow-hidden eduzz-ui-tw-whitespace-nowrap empty:eduzz-ui-tw-hidden md:eduzz-ui-tw-block'>
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
