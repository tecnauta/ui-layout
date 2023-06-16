import styled from '@emotion/styled';

const UserMenuDivider = ({ className }: { className: string }) => {
  return <hr className={className} />;
};

export default styled(UserMenuDivider)`
  margin-top: 7px;
  margin-bottom: 7px;
`;
