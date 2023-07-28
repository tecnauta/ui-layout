export type UserMenuGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  children: React.ReactNode;
};

const UserMenuGroup = ({ label, children, ...rest }: UserMenuGroupProps) => {
  return (
    <div className='uizz-layout-flex uizz-layout-flex-col' {...rest}>
      <p className='uizz-layout-mt-2 uizz-layout-px-4 uizz-layout-py-2 uizz-layout-text-sm uizz-layout-font-bold uizz-layout-tracking-[0.3px]'>
        {label}
      </p>
      {children}
    </div>
  );
};

export default UserMenuGroup;
