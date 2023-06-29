import { HTMLAttributes, memo, useEffect } from 'react';

import { TopbarApplication } from '..';
import useBoolean from '../../../hooks/useBoolean';
import IconClose from '../../../Icons/Close';
import IconFullscreen from '../../../Icons/Fullscreen';
import cx from '../../../utils/cx';

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
      className={cx(
        'group/apps invisible fixed left-0 top-[var(--eduzz-ui-layout-topbar-height-rem)] z-[105] box-border max-h-[calc(100vh-var(--eduzz-ui-layout-topbar-height-rem))] w-full select-none overflow-y-auto rounded-[0_0_0.5rem_0.5rem] bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.16)] sm:left-2 sm:w-[var(--eduzz-ui-layout-topbar-app-dropdown-width-rem)]',
        {
          '--opened !visible': opened,
          '--expanded !left-0 h-[calc(100%-var(--eduzz-ui-layout-topbar-height-rem))] !w-full overflow-x-auto rounded-none shadow-none':
            expanded
        }
      )}
      {...rest}
    >
      <div className='hidden h-14 w-full items-center justify-between border-b border-solid border-gray-200 px-4 py-2 group-[.--expanded]/apps:flex sm:px-7'>
        <h5 className='text-base font-semibold'>Lista de Apps</h5>
        <button onClick={toggleExpanded}>
          <IconClose size={18} />
        </button>
      </div>

      <div className='box-border grid grid-cols-[repeat(2,1fr)] flex-wrap justify-items-center gap-[0.5rem_0.5rem] p-4 group-[.--expanded]/apps:grid-cols-[1fr] group-[.--expanded]/apps:gap-0 group-[.--expanded]/apps:p-0 sm:grid-cols-[repeat(3,1fr)] sm:group-[.--expanded]/apps:grid-cols-[repeat(2,1fr)] sm:group-[.--expanded]/apps:gap-6 sm:group-[.--expanded]/apps:p-6 lg:group-[.--expanded]/apps:grid-cols-[repeat(3,1fr)] xl:group-[.--expanded]/apps:grid-cols-[repeat(4,1fr)]'>
        {!applications?.length && (
          <div className='col-start-1 col-end-4 flex w-full items-center justify-center p-12'>Carregando...</div>
        )}

        {applications?.map(app => {
          const isCurrent = app.application === currentApplication;

          return (
            <a
              className={cx(
                'box-border block w-full cursor-pointer grid-cols-[2rem_1fr] grid-rows-[1.5rem_auto] gap-1 rounded border-gray-200 px-2 py-4 no-underline hover:bg-[rgba(0,0,0,0.04)] group-[.--expanded]/apps:grid group-[.--expanded]/apps:border-b group-[.--expanded]/apps:p-4 sm:grid-cols-[4rem_1fr] sm:group-[.--expanded]/apps:border',
                isCurrent && 'bg-[rgba(0,0,0,0.04)]'
              )}
              key={app.application}
              href={isCurrent ? undefined : app.url}
              rel='noopener noreferrer'
              target='_blank'
              onClick={isCurrent ? onClose : undefined}
            >
              <img
                src={app.icon}
                className='m-auto mb-2 max-h-10 max-w-[2.5rem] group-[.--expanded]/apps:max-h-[1.50rem] group-[.--expanded]/apps:max-w-[1.50rem] sm:group-[.--expanded]/apps:max-h-[3.1rem] sm:group-[.--expanded]/apps:max-w-[3.1rem]'
              />

              <p className='text-center text-sm group-[.--expanded]/apps:text-left group-[.--expanded]/apps:text-base'>
                {app.label}
              </p>
              <p className='col-span-2 mt-0.5 hidden overflow-hidden text-base leading-normal text-[rgba(0,0,0,0.45)] opacity-80 group-[.--expanded]/apps:block sm:col-span-1 sm:col-start-2'>
                {app.description}
              </p>
            </a>
          );
        })}
      </div>

      {!!applications?.length && (
        <button
          className='flex h-[50px] w-full flex-row items-center justify-center gap-2 hover:bg-[rgba(0,0,0,0.04)] group-[.--expanded]/apps:hidden'
          onClick={toggleExpanded}
        >
          <IconFullscreen />
          Expandir
        </button>
      )}
    </div>
  );
});

export default AppsDropdown;
