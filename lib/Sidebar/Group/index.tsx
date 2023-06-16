import * as React from 'react';

import { Typography } from 'antd';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';

import SidebarGroupContext, { SidebarGroupContextType } from './context';
import CollapseEffect from '../../CollapseEffect';
import useBoolean from '../../hooks/useBoolean';

export interface SidebarGroupProps {
  label?: React.ReactNode;
  children: React.ReactNode;
  tabIndex?: number;
  id?: string;
  className?: string;
}

const SidebarGroup = React.forwardRef<HTMLLIElement, SidebarGroupProps>(
  ({ id, className, children, label, tabIndex }, ref) => {
    const [isExpanded, toogleExpanded, trueExpanded] = useBoolean(true);

    const contextValue = React.useMemo<SidebarGroupContextType>(() => {
      return { onItemActive: trueExpanded };
    }, [trueExpanded]);

    return (
      <SidebarGroupContext.Provider value={contextValue}>
        <li id={id} className={className} ref={ref}>
          {!!label && (
            <div
              className={cx('ui-eduzz-sidebar-group-item', isExpanded && 'ui-eduzz-sidebar-group-item-expanded')}
              onClick={toogleExpanded}
              tabIndex={tabIndex ?? 1}
            >
              <div className='ui-eduzz-sidebar-group-indicator' />

              <div className='ui-eduzz-sidebar-group-content'>
                <Typography.Text className='ui-eduzz-sidebar-group-label'>{label}</Typography.Text>
              </div>
            </div>
          )}

          <ul className='ui-eduzz-sidebar-group-items'>
            <CollapseEffect visibled={isExpanded}>
              <div className='ui-eduzz-sidebar-group-items-content'>{children}</div>
            </CollapseEffect>
          </ul>
        </li>
      </SidebarGroupContext.Provider>
    );
  }
);

export default styled(React.memo(SidebarGroup), { label: 'ui-eduzz-sidebar-group' })`
  user-select: none;

  .ui-eduzz-sidebar-group-item {
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 1.625rem 1fr;
    grid-gap: 0.5rem;
    align-items: center;
    line-height: 1.15;
    cursor: pointer;
    transition: 0.15s linear;
    min-height: 2.2rem;
    outline: none;
    position: relative;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;

    &:hover,
    &:active {
      background-color: rgba(0, 0, 0, 0.03);
    }

    & .ui-eduzz-sidebar-group-indicator {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -2px;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.65);
      opacity: 0.3;
      width: 30px;
      transition: 0.3s;
    }

    & .ui-eduzz-sidebar-group-content {
      min-width: 0;
      grid-column: 2;

      & .ui-eduzz-sidebar-group-label {
        text-transform: uppercase;
        white-space: nowrap;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        letter-spacing: 0.03em;
        color: rgba(0, 0, 0, 0.65);
      }
    }

    &.ui-eduzz-sidebar-group-item-expanded {
      & .ui-eduzz-sidebar-group-indicator {
        top: calc(50% - 1px);
        height: 1px;
        margin-top: -0.5px;
        background-color: rgba(0, 0, 0, 0.45);
        opacity: 0.3;
      }

      & .ui-eduzz-sidebar-group-label {
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }

  & .ui-eduzz-sidebar-group-items {
    margin: 0;
    padding: 0;

    .ui-eduzz-sidebar-group-items-content {
      padding-bottom: 0.7rem;

      & li {
        margin-bottom: 0;
      }
    }
  }
`;
