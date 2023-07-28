import { useMemo } from 'react';

export interface AvatarProps {
  src?: string | undefined | null;
  children?: string;
}

const Avatar = ({ src, children }: AvatarProps) => {
  const letters = useMemo(() => {
    if (children && children.length <= 2) {
      return children;
    }

    const parts = (children ?? 'u').split(' ');
    return `${parts[0][0]}${parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : ''}`.trim();
  }, [children]);

  return (
    <div className='uizz-layout-flex uizz-layout-h-7 uizz-layout-w-7 uizz-layout-items-center uizz-layout-justify-center uizz-layout-rounded-[50%] uizz-layout-bg-[var(--eduzz-theme-primary)] uizz-layout-text-xs uizz-layout-text-white'>
      {src ? <img src={src} /> : letters}
    </div>
  );
};

export default Avatar;
