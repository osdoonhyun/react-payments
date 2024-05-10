import { PropsWithChildren } from 'react';

type ButtonBoxProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

export default function ButtonBox({
  className,
  onClick,
  children,
}: ButtonBoxProps) {
  return (
    <div className={`button-box ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
