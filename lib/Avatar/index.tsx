import './styles.css';

export interface AvatarProps {
  src?: string | undefined | null;
  children?: string;
}

const Avatar = ({ src }: AvatarProps) => {
  return <div className='eduzz-ui-layout-avatar'>{!!src && <img src={src} />}</div>;
};

export default Avatar;
