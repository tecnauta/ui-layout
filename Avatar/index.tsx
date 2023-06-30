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
    <div className='eduzz-ui-tw-flex eduzz-ui-tw-h-7 eduzz-ui-tw-w-7 eduzz-ui-tw-items-center eduzz-ui-tw-justify-center eduzz-ui-tw-rounded-[50%] eduzz-ui-tw-bg-[var(--eduzz-theme-primary)] eduzz-ui-tw-text-xs eduzz-ui-tw-text-white'>
      {src ? <img src={src} /> : letters}
    </div>
  );
};

export default Avatar;
