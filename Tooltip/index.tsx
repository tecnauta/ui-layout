import { ReactNode } from 'react';

interface TooltipProps {
  title?: string | undefined;
  children: ReactNode;
}

const Tooltip = ({ title, children }: TooltipProps) => {
  return (
    <div className='uizz-layout-group/tooltip uizz-layout-relative'>
      {title && (
        <div className='uizz-layout-pointer-events-none uizz-layout-absolute uizz-layout-bottom-[-30px] uizz-layout-left-[50%] uizz-layout-translate-x-[-50%] uizz-layout-rounded-lg uizz-layout-bg-black uizz-layout-px-2 uizz-layout-py-1 uizz-layout-text-[12px] uizz-layout-text-white uizz-layout-opacity-0 uizz-layout-transition group-hover/tooltip:uizz-layout-opacity-70'>
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
