export type UserMenuGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  children: React.ReactNode;
};

const UserMenuGroup = ({ label, children, ...rest }: UserMenuGroupProps) => {
  return (
    <div className='eduzz-ui-tw-flex eduzz-ui-tw-flex-col' {...rest}>
      <p className='eduzz-ui-tw-mt-2 eduzz-ui-tw-px-4 eduzz-ui-tw-py-2 eduzz-ui-tw-text-sm eduzz-ui-tw-font-bold eduzz-ui-tw-tracking-[0.3px]'>
        {label}
      </p>
      {children}
    </div>
  );
};

export default UserMenuGroup;
