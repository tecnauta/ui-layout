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
    <div className='flex h-7 w-7 items-center justify-center rounded-[50%] bg-[var(--eduzz-theme-primary)] text-xs text-white'>
      {src ? <img src={src} /> : letters}
    </div>
  );
};

export default Avatar;
