export interface AvatarProps {
  src?: string | undefined | null;
  children?: string;
}

const Avatar = ({ src }: AvatarProps) => {
  return <div className='h-8 w-8 rounded-[50%] bg-[var(--eduzz-theme-primary)]'>{!!src && <img src={src} />}</div>;
};

export default Avatar;
