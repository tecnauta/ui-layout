import { ReactNode } from 'react';

interface BadgeProps {
  count?: number | undefined | null;
  dot?: boolean | undefined | null;
  children: ReactNode;
}

const Badge = ({ children, count, dot }: BadgeProps) => {
  return (
    <div className='relative'>
      {count ? (
        <div className='absolute right-[-8px] top-[-4px] inline-block h-[16px] min-w-[16px] rounded-full bg-red-500 px-1 text-center text-[12px] leading-[17px]  text-white'>
          {count > 99 ? '99+' : count}
        </div>
      ) : dot ? (
        <div className='absolute right-[2px] top-[2px] inline-block h-[6px] min-w-[6px] rounded-full bg-red-500'>
          {count}
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Badge;
