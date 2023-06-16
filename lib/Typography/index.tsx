import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

const Typography = ({ children, className }: TypographyProps) => {
  return <p className={className}> {children}</p>;
};

export default Typography;
