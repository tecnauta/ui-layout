import styled from '@emotion/styled';

import Typography from '../../../Typography';

export type UserMenuGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  children: React.ReactNode;
  className?: string;
};

const UserMenuGroup = ({ label, className, children, ...rest }: UserMenuGroupProps) => {
  return (
    <div className={className} {...rest}>
      <Typography className='ui-eduzz-topbar-user-menu-group-label'>{label}</Typography>
      {children}
    </div>
  );
};

export default styled(UserMenuGroup, { label: 'ui-eduzz-topbar-user-menu-group' })`
  display: flex;
  flex-direction: column;

  & > .ui-eduzz-topbar-user-menu-group-label {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    cursor: default;
    letter-spacing: 0.3px;
    font-weight: bold;
  }
`;
