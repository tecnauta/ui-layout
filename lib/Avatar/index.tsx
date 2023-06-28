export interface AvatarProps {
  src?: string | undefined | null;
  children?: string;
}

const Avatar = ({ src }: AvatarProps) => {
  return <div className='w-8 h-8 bg-[var(--eduzz-theme-primary)] rounded-[50%]'>{!!src && <img src={src} />}</div>;
};

export default Avatar;
