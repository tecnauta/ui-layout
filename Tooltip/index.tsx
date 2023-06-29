import { ReactNode } from 'react';

interface TooltipProps {
  title?: string | undefined;
  children: ReactNode;
}

const Tooltip = ({ title, children }: TooltipProps) => {
  return (
    <div className='group/tooltip relative'>
      {title && (
        <div className='pointer-events-none absolute bottom-[-30px] left-[50%] translate-x-[-50%] rounded-lg bg-black px-2 py-1 text-[12px] text-white opacity-0 transition group-hover/tooltip:opacity-70'>
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
