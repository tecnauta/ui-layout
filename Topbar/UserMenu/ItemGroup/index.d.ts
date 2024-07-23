export type UserMenuGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    label: string;
    children: React.ReactNode;
};
declare const UserMenuGroup: ({ label, children, ...rest }: UserMenuGroupProps) => import("react/jsx-runtime").JSX.Element;
export default UserMenuGroup;
