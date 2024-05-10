import { HTMLAttributes, PropsWithChildren } from 'react';

type HStackProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function HStack({ children, ...rest }: HStackProps) {
  return (
    <div className='flex-center' {...rest}>
      {children}
    </div>
  );
}
