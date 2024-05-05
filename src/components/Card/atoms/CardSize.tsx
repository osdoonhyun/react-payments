import { PropsWithChildren } from 'react';

export type CardSizeProps = PropsWithChildren & {
  size?: 'small' | 'big';
  hasChip?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
};

export default function CardSize({
  size = 'small',
  hasChip = false,
  backgroundColor,
  children,
}: CardSizeProps) {
  return (
    <div
      className={`${size}-card${hasChip ? '__chip' : ''} ${size}-card`}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
}
