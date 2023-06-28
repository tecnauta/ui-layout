import { HTMLAttributes, memo, useEffect } from 'react';

import { FullscreenOutlined } from '@ant-design/icons';

import { TopbarApplication } from '..';
import useBoolean from '../../../hooks/useBoolean';
import IconClose from '../../../Icons/Close';
import cx from '../../../utils/cx';

import './style.css';

export type AppsDropdownProps = HTMLAttributes<HTMLDivElement> & {
  currentApplication: string | undefined;
  applications: TopbarApplication[] | undefined;
  opened: boolean;
  onClose: () => void;
};

const AppsDropdown = memo<AppsDropdownProps>(({ currentApplication, applications, opened, onClose, ...rest }) => {
  const [expanded, toggleExpanded, , closeExpanded] = useBoolean();

  useEffect(() => {
    const oldValue = document.body.style.overflow;
    document.body.style.overflow = expanded ? 'hidden' : oldValue;

    return () => {
      document.body.style.overflow = oldValue;
    };
  }, [expanded]);

  useEffect(() => {
    if (opened) return;
    closeExpanded();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  return (
    <div
      className={cx('eduzz-ui-layout-topbar-apps-dropdown', {
        'eduzz-ui-layout-topbar-apps-dropdown-opened': opened,
        'eduzz-ui-layout-topbar-apps-dropdown-expanded': expanded
      })}
      {...rest}
    >
      <div className='eduzz-ui-layout-topbar-apps-dropdown-header'>
        <h5>Lista de Apps</h5>
        <button onClick={toggleExpanded}>
          <IconClose size={18} />
        </button>
      </div>

      <div className='eduzz-ui-layout-topbar-apps-dropdown-list-apps'>
        {!applications?.length && <div className='eduzz-ui-layout-topbar-apps-dropdown-loader'>Carregando...</div>}

        {applications?.map(app => {
          const isCurrent = app.application === currentApplication;

          return (
            <a
              className={cx(
                'eduzz-ui-layout-topbar-apps-dropdown-item',
                isCurrent && 'eduzz-ui-layout-topbar-apps-dropdown-current'
              )}
              key={app.application}
              href={isCurrent ? undefined : app.url}
              rel='noopener noreferrer'
              target='_blank'
              onClick={isCurrent ? onClose : undefined}
            >
              <img src={app.icon} className='eduzz-ui-layout-topbar-apps-dropdown-icon' />

              <p className='eduzz-ui-layout-topbar-apps-dropdown-label'>{app.label}</p>
              <p className='eduzz-ui-layout-topbar-apps-dropdown-description'>{app.description}</p>
            </a>
          );
        })}
      </div>

      {!!applications?.length && (
        <div className='eduzz-ui-layout-topbar-apps-dropdown-expand'>
          <button onClick={toggleExpanded}>
            <FullscreenOutlined />
            Expandir
          </button>
        </div>
      )}
    </div>
  );
});

export default AppsDropdown;
