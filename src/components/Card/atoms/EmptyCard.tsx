import { PropsWithChildren } from 'react';

type EmptyCardProps = PropsWithChildren & {
  onCardClick?: () => void;
  style?: React.CSSProperties;
};

export default function EmptyCard({
  onCardClick,
  children,
  style,
}: EmptyCardProps) {
  return (
    <div onClick={onCardClick} className='empty-card' style={style}>
      {children}
    </div>
  );
}
