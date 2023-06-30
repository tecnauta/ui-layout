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
    document.body.style.overflow = expanded ? 'eduzz-ui-tw-hidden' : oldValue;

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
        'eduzz-ui-tw-group/apps eduzz-ui-tw-invisible eduzz-ui-tw-fixed eduzz-ui-tw-left-0 eduzz-ui-tw-top-[var(--eduzz-ui-layout-topbar-height-rem)] eduzz-ui-tw-z-[105] eduzz-ui-tw-box-border eduzz-ui-tw-max-h-[calc(100vh-var(--eduzz-ui-layout-topbar-height-rem))] eduzz-ui-tw-w-full eduzz-ui-tw-select-none eduzz-ui-tw-overflow-y-auto eduzz-ui-tw-rounded-[0_0_0.5rem_0.5rem] eduzz-ui-tw-bg-white eduzz-ui-tw-shadow-[0px_8px_24px_rgba(0,0,0,0.16)] sm:eduzz-ui-tw-left-2 sm:eduzz-ui-tw-w-[var(--eduzz-ui-layout-topbar-app-dropdown-width-rem)]',
        {
          '--opened !eduzz-ui-tw-visible': opened,
          '--expanded !eduzz-ui-tw-left-0 eduzz-ui-tw-h-[calc(100%-var(--eduzz-ui-layout-topbar-height-rem))] !eduzz-ui-tw-w-full eduzz-ui-tw-overflow-x-auto eduzz-ui-tw-rounded-none eduzz-ui-tw-shadow-none':
            expanded
        }
      )}
      {...rest}
    >
      <div className='eduzz-ui-tw-hidden eduzz-ui-tw-h-14 eduzz-ui-tw-w-full eduzz-ui-tw-items-center eduzz-ui-tw-justify-between eduzz-ui-tw-border-b eduzz-ui-tw-border-solid eduzz-ui-tw-border-gray-200 eduzz-ui-tw-px-4 eduzz-ui-tw-py-2 group-[.--expanded]/apps:eduzz-ui-tw-flex sm:eduzz-ui-tw-px-7'>
        <h5 className='eduzz-ui-tw-text-base eduzz-ui-tw-font-semibold'>Lista de Apps</h5>
        <button onClick={toggleExpanded}>
          <IconClose size={18} />
        </button>
      </div>

      <div className='eduzz-ui-tw-box-border eduzz-ui-tw-grid eduzz-ui-tw-grid-cols-[repeat(2,1fr)] eduzz-ui-tw-flex-wrap eduzz-ui-tw-justify-items-center eduzz-ui-tw-gap-[0.5rem_0.5rem] eduzz-ui-tw-p-4 group-[.--expanded]/apps:eduzz-ui-tw-grid-cols-[1fr] group-[.--expanded]/apps:eduzz-ui-tw-gap-0 group-[.--expanded]/apps:eduzz-ui-tw-p-0 sm:eduzz-ui-tw-grid-cols-[repeat(3,1fr)] sm:group-[.--expanded]/apps:eduzz-ui-tw-grid-cols-[repeat(2,1fr)] sm:group-[.--expanded]/apps:eduzz-ui-tw-gap-6 sm:group-[.--expanded]/apps:eduzz-ui-tw-p-6 lg:group-[.--expanded]/apps:eduzz-ui-tw-grid-cols-[repeat(3,1fr)] xl:group-[.--expanded]/apps:eduzz-ui-tw-grid-cols-[repeat(4,1fr)]'>
        {!applications?.length && (
          <div className='eduzz-ui-tw-col-start-1 eduzz-ui-tw-col-end-4 eduzz-ui-tw-flex eduzz-ui-tw-w-full eduzz-ui-tw-items-center eduzz-ui-tw-justify-center eduzz-ui-tw-p-12'>
            Carregando...
          </div>
        )}

        {applications?.map(app => {
          const isCurrent = app.application === currentApplication;

          return (
            <a
              className={cx(
                'eduzz-ui-tw-box-border eduzz-ui-tw-block eduzz-ui-tw-w-full eduzz-ui-tw-cursor-pointer eduzz-ui-tw-grid-cols-[2rem_1fr] eduzz-ui-tw-grid-rows-[1.5rem_auto] eduzz-ui-tw-gap-1 eduzz-ui-tw-rounded eduzz-ui-tw-border-gray-200 eduzz-ui-tw-px-2 eduzz-ui-tw-py-4 eduzz-ui-tw-no-underline hover:eduzz-ui-tw-bg-[rgba(0,0,0,0.04)] group-[.--expanded]/apps:eduzz-ui-tw-grid group-[.--expanded]/apps:eduzz-ui-tw-border-b group-[.--expanded]/apps:eduzz-ui-tw-p-4 sm:eduzz-ui-tw-grid-cols-[4rem_1fr] sm:group-[.--expanded]/apps:eduzz-ui-tw-border',
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
                className='eduzz-ui-tw-m-auto eduzz-ui-tw-mb-2 eduzz-ui-tw-max-h-10 eduzz-ui-tw-max-w-[2.5rem] group-[.--expanded]/apps:eduzz-ui-tw-max-h-[1.50rem] group-[.--expanded]/apps:eduzz-ui-tw-max-w-[1.50rem] sm:group-[.--expanded]/apps:eduzz-ui-tw-max-h-[3.1rem] sm:group-[.--expanded]/apps:eduzz-ui-tw-max-w-[3.1rem]'
              />

              <p className='eduzz-ui-tw-text-center eduzz-ui-tw-text-sm group-[.--expanded]/apps:eduzz-ui-tw-text-left group-[.--expanded]/apps:eduzz-ui-tw-text-base'>
                {app.label}
              </p>
              <p className='eduzz-ui-tw-col-span-2 eduzz-ui-tw-mt-0.5 eduzz-ui-tw-hidden eduzz-ui-tw-overflow-hidden eduzz-ui-tw-text-base eduzz-ui-tw-leading-normal eduzz-ui-tw-text-[rgba(0,0,0,0.45)] eduzz-ui-tw-opacity-80 group-[.--expanded]/apps:eduzz-ui-tw-block sm:eduzz-ui-tw-col-span-1 sm:eduzz-ui-tw-col-start-2'>
                {app.description}
              </p>
            </a>
          );
        })}
      </div>

      {!!applications?.length && (
        <button
          className='eduzz-ui-tw-flex eduzz-ui-tw-h-[50px] eduzz-ui-tw-w-full eduzz-ui-tw-flex-row eduzz-ui-tw-items-center eduzz-ui-tw-justify-center eduzz-ui-tw-gap-2 hover:eduzz-ui-tw-bg-[rgba(0,0,0,0.04)] group-[.--expanded]/apps:eduzz-ui-tw-hidden'
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
