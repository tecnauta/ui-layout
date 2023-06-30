import { ReactNode } from 'react';

interface BadgeProps {
  count?: number | undefined | null;
  dot?: boolean | undefined | null;
  children: ReactNode;
}

const Badge = ({ children, count, dot }: BadgeProps) => {
  return (
    <div className='eduzz-ui-tw-relative'>
      {count ? (
        <div className='eduzz-ui-tw-absolute eduzz-ui-tw-right-[-8px] eduzz-ui-tw-top-[-4px] eduzz-ui-tw-inline-block eduzz-ui-tw-h-[16px] eduzz-ui-tw-min-w-[16px] eduzz-ui-tw-rounded-full eduzz-ui-tw-bg-red-500 eduzz-ui-tw-px-1 eduzz-ui-tw-text-center eduzz-ui-tw-text-[12px] eduzz-ui-tw-leading-[17px]  eduzz-ui-tw-text-white'>
          {count > 99 ? '99+' : count}
        </div>
      ) : dot ? (
        <div className='eduzz-ui-tw-absolute eduzz-ui-tw-right-[2px] eduzz-ui-tw-top-[2px] eduzz-ui-tw-inline-block eduzz-ui-tw-h-[6px] eduzz-ui-tw-min-w-[6px] eduzz-ui-tw-rounded-full eduzz-ui-tw-bg-red-500'>
          {count}
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Badge;
