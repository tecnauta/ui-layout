import './style.css';

export type UserMenuGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  children: React.ReactNode;
};

const UserMenuGroup = ({ label, children, ...rest }: UserMenuGroupProps) => {
  return (
    <div className='eduzz-ui-layout-topbar-user-menu-group' {...rest}>
      <p className='eduzz-ui-layout-topbar-user-menu-group-label'>{label}</p>
      {children}
    </div>
  );
};

export default UserMenuGroup;
