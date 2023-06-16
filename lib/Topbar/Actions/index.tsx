import * as React from 'react';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import { useContextSelector } from 'use-context-selector';

import TopbarActionsContext, { TopbarActionsContextType } from './context';
import { TOPBAR_HEIGHT } from '../../context';
import useBoolean from '../../hooks/useBoolean';
import useClickOutside from '../../hooks/useClickOutside';
import IconChevronLeft from '../../Icons/ChevronLeft';
import IconChevronRight from '../../Icons/ChevronRight';
import Action from '../Action';
import TopbarContext from '../context';

interface ActionsProps {
  children: React.ReactNode;
  className?: string;
}

const Actions = ({ children, className }: ActionsProps) => {
  const [actions, setActions] = React.useState<Parameters<TopbarActionsContextType>[0][]>([]);
  const [expanded, toggleExpanded, , closeExpanded] = useBoolean(false);

  const ref = React.useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeExpanded, []);

  const hasUser = useContextSelector(TopbarContext, context => !!context.user);

  const registerAction: TopbarActionsContextType = React.useCallback(action => {
    setActions(actions => [...actions, action]);

    return () => setActions(actions => actions.filter(a => a !== action));
  }, []);

  const badgeCount = React.useMemo(() => actions.reduce((acc, a) => acc + a.badgeCount, 0), [actions]);
  const badgeDot = React.useMemo(() => actions.some(a => a.badgeDot), [actions]);

  return (
    <div
      ref={ref}
      className={cx(className, {
        '--ui-eduzz-layout-enabled': actions.length > 2,
        '--ui-eduzz-layout-has-user': hasUser,
        '--ui-eduzz-layout-expanded': expanded
      })}
    >
      <div className='ui-eduzz-layout-topbar-actions-content'>
        <Action
          className='ui-eduzz-layout-topbar-actions-content-expand'
          badgeCount={expanded ? 0 : badgeCount}
          badgeDot={expanded ? false : badgeDot}
          icon={expanded ? <IconChevronRight size={19} /> : <IconChevronLeft size={19} />}
          onClick={toggleExpanded}
        />
        <TopbarActionsContext.Provider value={registerAction}>
          <div className='ui-eduzz-layout-topbar-actions-content-icons'>{children}</div>
        </TopbarActionsContext.Provider>
      </div>
    </div>
  );
};

export default styled(React.memo(Actions), { label: 'ui-eduzz-layout-topbar-actions' })`
  .ui-eduzz-layout-topbar-actions-content,
  .ui-eduzz-layout-topbar-actions-content-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
  }

  .ui-eduzz-layout-topbar-actions-content-expand {
    display: none;
  }

  &.--ui-eduzz-layout-enabled {
    @media (max-width: 575px) {
      .ui-eduzz-layout-topbar-actions-content-expand {
        display: block;
      }

      .ui-eduzz-layout-topbar-actions-content {
        height: calc(${TOPBAR_HEIGHT}px - 3px);
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(0.5rem);
        -webkit-backdrop-filter: blur(0.5rem);
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 8px;
      }

      .ui-eduzz-layout-topbar-actions-content-icons {
        width: 0;
        opacity: 0;
        transition: 0.3s;
        pointer-events: none;
      }

      &.--ui-eduzz-layout-has-user .ui-eduzz-layout-topbar-actions-content {
        right: 40px;
        padding: 0;
      }

      &.--ui-eduzz-layout-expanded {
        .ui-eduzz-layout-topbar-actions-content-icons {
          width: calc(100vw - 65px);
          opacity: 1;
          pointer-events: all;
          margin-right: 8px;
        }

        &.--ui-eduzz-layout-has-user .ui-eduzz-layout-topbar-actions-content-icons {
          width: calc(100vw - 100px);
        }
      }
    }
  }
`;
