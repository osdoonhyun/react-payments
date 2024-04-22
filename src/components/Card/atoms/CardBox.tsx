import { PropsWithChildren } from 'react';

type CardBoxProps = PropsWithChildren & {
  onClick?: () => void;
  style?: React.CSSProperties;
};

export default function CardBox({ children, style, ...rest }: CardBoxProps) {
  return (
    <div className='card-box' style={style} {...rest}>
      {children}
    </div>
  );
}
