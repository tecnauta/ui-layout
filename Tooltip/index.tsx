import { ReactNode } from 'react';

interface TooltipProps {
  title?: string | undefined;
  children: ReactNode;
}

const Tooltip = ({ title, children }: TooltipProps) => {
  return (
    <div className='eduzz-ui-tw-group/tooltip eduzz-ui-tw-relative'>
      {title && (
        <div className='eduzz-ui-tw-pointer-events-none eduzz-ui-tw-absolute eduzz-ui-tw-bottom-[-30px] eduzz-ui-tw-left-[50%] eduzz-ui-tw-translate-x-[-50%] eduzz-ui-tw-rounded-lg eduzz-ui-tw-bg-black eduzz-ui-tw-px-2 eduzz-ui-tw-py-1 eduzz-ui-tw-text-[12px] eduzz-ui-tw-text-white eduzz-ui-tw-opacity-0 eduzz-ui-tw-transition group-hover/tooltip:eduzz-ui-tw-opacity-70'>
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
