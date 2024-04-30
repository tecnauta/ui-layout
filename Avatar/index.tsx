import { useCallback, useMemo, useState } from 'react';

export interface AvatarProps {
  src?: string | undefined | null;
  children?: string;
}

function getLetters(name: string): string {
  let letters = '';

  const words = name.split(' ');

  for (const word of words) {
    letters += word.charAt(0);
    if (letters.length >= 2) break;
  }

  return letters;
}

const Avatar = ({ src, children }: AvatarProps) => {
  const [errorLoading, setErrorLoading] = useState(false);

  const letters = useMemo(() => getLetters(children ?? ''), [children]);

  const onErrorLoadingImage = useCallback(() => setErrorLoading(true), []);

  return (
    <div className='uizz-layout-flex uizz-layout-h-7 uizz-layout-w-7 uizz-layout-items-center uizz-layout-justify-center uizz-layout-overflow-hidden uizz-layout-rounded-[50%] uizz-layout-bg-[var(--eduzz-theme-primary)] uizz-layout-text-xs uizz-layout-text-white dark:uizz-layout-text-black'>
      {src && !errorLoading ? (
        <img src={src} onError={onErrorLoadingImage} className='uizz-layout-max-h-full uizz-layout-max-w-full' />
      ) : (
        letters
      )}
    </div>
  );
};

export default Avatar;
