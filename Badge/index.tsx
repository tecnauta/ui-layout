import { ReactNode } from 'react';

interface BadgeProps {
  count?: number | undefined | null;
  dot?: boolean | undefined | null;
  children: ReactNode;
}

const Badge = ({ children, count, dot }: BadgeProps) => {
  return (
    <div className='uizz-layout-relative'>
      {count ? (
        <div className='uizz-layout-absolute uizz-layout-right-[-8px] uizz-layout-top-[-4px] uizz-layout-inline-block uizz-layout-h-[16px] uizz-layout-min-w-[16px] uizz-layout-rounded-full uizz-layout-bg-red-500 uizz-layout-px-1 uizz-layout-text-center uizz-layout-text-[12px] uizz-layout-leading-[17px]  uizz-layout-text-white'>
          {count > 99 ? '99+' : count}
        </div>
      ) : dot ? (
        <div className='uizz-layout-absolute uizz-layout-right-[2px] uizz-layout-top-[2px] uizz-layout-inline-block uizz-layout-h-[6px] uizz-layout-min-w-[6px] uizz-layout-rounded-full uizz-layout-bg-red-500'>
          {count}
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Badge;
