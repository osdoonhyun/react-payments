import { PropsWithChildren } from 'react';

type CardBoxProps = PropsWithChildren & {
  onClick?: () => void;
  backgroundColor?: string;
};

export default function CardBox({
  children,
  onClick,
  backgroundColor,
}: CardBoxProps) {
  return (
    <div className='card-box' style={{ backgroundColor }} onClick={onClick}>
      {children}
    </div>
  );
}
