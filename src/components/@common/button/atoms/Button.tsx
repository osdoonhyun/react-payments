import { forwardRef, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, disabled, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={className}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
