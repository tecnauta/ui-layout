export type UserMenuGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  children: React.ReactNode;
};

const UserMenuGroup = ({ label, children, ...rest }: UserMenuGroupProps) => {
  return (
    <div className='ui-eduzz-layout-topbar-user-menu-group' {...rest}>
      <p className='ui-eduzz-layout-topbar-user-menu-group-label'>{label}</p>
      {children}
    </div>
  );
};

export default UserMenuGroup;
