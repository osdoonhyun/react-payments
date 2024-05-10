import ButtonBox from '../atoms/ButtonBox';
import ButtonText from '../atoms/ButtonText';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  type?: 'submit';
  label?: string;
  disabled?: boolean;
  ref?: React.Ref<HTMLInputElement> | React.RefObject<HTMLInputElement>;
  children?: React.ReactNode;
};

export default function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <ButtonBox className={className}>
      <ButtonText {...rest}>{children}</ButtonText>
    </ButtonBox>
  );
}
