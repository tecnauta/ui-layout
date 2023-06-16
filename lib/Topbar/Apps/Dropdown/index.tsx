import * as React from 'react';

import { FullscreenOutlined } from '@ant-design/icons';
import { Typography, Button, Spin } from 'antd';

import { cx } from '@emotion/css';
import styled from '@emotion/styled';

import { TopbarApplication } from '..';
import { TOPBAR_DROPDOWN_WIDTH, TOPBAR_HEIGHT } from '../../..';
import useBoolean from '../../../hooks/useBoolean';
import { mediaQuery } from '../../../hooks/useMediaQuery';
import IconClose from '../../../Icons/Close';

export type AppsDropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  currentApplication: string | undefined;
  applications: TopbarApplication[] | undefined;
  opened: boolean;
  onClose: () => void;
  className?: string;
};

const AppsDropdown = React.memo<AppsDropdownProps>(
  ({ currentApplication, applications, className, opened, onClose, ...rest }) => {
    const [expanded, toggleExpanded, , closeExpanded] = useBoolean();

    React.useEffect(() => {
      const oldValue = document.body.style.overflow;
      document.body.style.overflow = expanded ? 'hidden' : oldValue;

      return () => {
        document.body.style.overflow = oldValue;
      };
    }, [expanded]);

    React.useEffect(() => {
      if (opened) return;
      closeExpanded();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [opened]);

    return (
      <div
        className={cx(className, {
          'ui-eduzz-topbar-apps-dropdown-opened': opened,
          'ui-eduzz-topbar-apps-dropdown-expanded': expanded
        })}
        {...rest}
      >
        <div className='ui-eduzz-topbar-apps-dropdown-header'>
          <Typography.Title level={5}>Lista de Apps</Typography.Title>
          <Button icon={<IconClose size={18} />} shape='circle' type='text' onClick={toggleExpanded} />
        </div>

        <div className='ui-eduzz-topbar-apps-dropdown-list-apps'>
          {!applications?.length && (
            <div className='ui-eduzz-topbar-apps-dropdown-loader'>
              <Spin />
            </div>
          )}

          {applications?.map(app => {
            const isCurrent = app.application === currentApplication;

            return (
              <a
                className={cx(
                  'ui-eduzz-topbar-apps-dropdown-item',
                  isCurrent && 'ui-eduzz-topbar-apps-dropdown-current'
                )}
                key={app.application}
                href={isCurrent ? undefined : app.url}
                rel='noopener noreferrer'
                target='_blank'
                onClick={isCurrent ? onClose : undefined}
              >
                <img src={app.icon} className='ui-eduzz-topbar-apps-dropdown-icon' />

                <Typography className='ui-eduzz-topbar-apps-dropdown-label'>{app.label}</Typography>
                <Typography className='ui-eduzz-topbar-apps-dropdown-description'>{app.description}</Typography>
              </a>
            );
          })}
        </div>

        {!!applications?.length && (
          <div className='ui-eduzz-topbar-apps-dropdown-expand'>
            <Button icon={<FullscreenOutlined />} type='text' block onClick={toggleExpanded}>
              Expandir
            </Button>
          </div>
        )}
      </div>
    );
  }
);

export default styled(AppsDropdown, { label: 'ui-eduzz-topbar-apps-dropdown' })`
  width: ${TOPBAR_DROPDOWN_WIDTH / 16}rem;
  position: fixed;
  background: rgb(255, 255, 255);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.16);
  top: ${TOPBAR_HEIGHT / 16}rem;
  left: 0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  z-index: 105;
  opacity: 0;
  visibility: hidden;
  user-select: none;
  box-sizing: border-box;
  max-height: calc(100vh - ${TOPBAR_HEIGHT / 16}rem);
  overflow-y: auto;

  ${mediaQuery.down('sm')} {
    width: 100%;
    left: 0;
  }

  &.ui-eduzz-topbar-apps-dropdown-opened {
    opacity: 1;
    visibility: visible;
    user-select: initial;
  }

  .ui-eduzz-topbar-apps-dropdown-header {
    display: none;
  }

  .ui-eduzz-topbar-apps-dropdown-expand button {
    height: 50px;
  }

  .ui-eduzz-topbar-apps-dropdown-list-apps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem 0.5rem;
    flex-wrap: wrap;
    justify-items: center;
    box-sizing: border-box;
    padding: 1rem;

    .ui-eduzz-topbar-apps-dropdown-loader {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      grid-column-start: 1;
      grid-column-end: 4;
      padding: 3rem;
    }

    .ui-eduzz-topbar-apps-dropdown-item {
      width: 100%;
      text-align: center;
      border-radius: 0.25rem;
      cursor: pointer;
      text-decoration: none;
      padding: 1rem 0.5rem;
      display: block;

      .ui-eduzz-topbar-apps-dropdown-icon {
        max-width: 2.5rem;
        max-height: 2.5rem;
        margin-bottom: 0.5rem;
      }

      .ui-eduzz-topbar-apps-dropdown-description {
        display: none;
        overflow: hidden;
        opacity: 0.8;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 2px;
      }

      &.ui-eduzz-topbar-apps-dropdown-current {
        background: rgba(0, 0, 0, 0.04);
      }

      &:hover {
        background: rgba(0, 0, 0, 0.04);
      }
    }
  }

  &.ui-eduzz-topbar-apps-dropdown-expanded {
    width: 100%;
    left: 0;
    height: calc(100% - ${TOPBAR_HEIGHT}px);
    overflow-x: auto;
    box-shadow: none;
    border-radius: 0;

    .ui-eduzz-topbar-apps-dropdown-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0.5rem 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);

      h5 {
        margin-bottom: 0;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .ui-eduzz-topbar-apps-dropdown-expand {
      display: none;
    }

    .ui-eduzz-topbar-apps-dropdown-list-apps {
      padding: 0;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 0;

      .ui-eduzz-topbar-apps-dropdown-item {
        height: 100%;
        display: grid;
        grid-template-columns: 1.56rem 1fr;
        grid-template-rows: 1.56rem auto;
        grid-gap: 0.5rem;
        text-align: left;
        padding: 1.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        align-items: center;

        .ui-eduzz-topbar-apps-dropdown-icon {
          max-width: 1.56rem;
          max-height: 1.56rem;
          grid-column: 1;
          grid-row: 1;
          margin-bottom: 0;
        }

        .ui-eduzz-topbar-apps-dropdown-label {
          font-size: 16px;
          grid-column: 2;
          grid-row: 1;
        }

        .ui-eduzz-topbar-apps-dropdown-description {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row: 2;
          display: block;
        }
      }

      ${mediaQuery.up('md')} {
        padding: 2rem;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;

        .ui-eduzz-topbar-apps-dropdown-item {
          margin: auto;
          border: 1px solid rgba(0, 0, 0, 0.12);
          grid-template-columns: 3.75rem 1fr;
          grid-template-rows: 1.25rem auto;
          padding: 1rem;
          grid-gap: 0.25rem;
          align-items: start;

          .ui-eduzz-topbar-apps-dropdown-icon {
            grid-row-start: 1;
            grid-row-end: 3;
            max-width: 3.125rem;
            max-height: 3.125rem;
          }

          .ui-eduzz-topbar-apps-dropdown-description {
            grid-column-start: 2;
            grid-column-end: 2;
          }
        }
      }

      ${mediaQuery.up('lg')} {
        grid-template-columns: repeat(3, 1fr);
      }

      ${mediaQuery.up('xl')} {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;
