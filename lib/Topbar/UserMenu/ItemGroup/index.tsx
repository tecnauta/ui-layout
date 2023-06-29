export type UserMenuGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  children: React.ReactNode;
};

const UserMenuGroup = ({ label, children, ...rest }: UserMenuGroupProps) => {
  return (
    <div className='flex flex-col' {...rest}>
      <p className='mt-2 px-4 py-2 text-sm font-bold tracking-[0.3px]'>{label}</p>
      {children}
    </div>
  );
};

export default UserMenuGroup;
