import { forwardRef, HTMLAttributes } from 'react';

type ButtonDivProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const ButtonDiv = forwardRef<HTMLDivElement, ButtonDivProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={`button-box ${className}`} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

export default ButtonDiv;
