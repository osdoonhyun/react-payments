import InputBasic from './InputBasic';
import InputBox from './InputBox';
import InputContainer from './InputContainer';
import InputErrorMessage from './InputErrorMessage';
import InputTitle from './InputTitle';
import InputUnderLine from './InputUnderLine';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputFactory = ({ className, ...rest }: InputProps) => {
  return <InputBasic className={className} {...rest} />;
};

export const Input = Object.assign(InputFactory, {
  Container: InputContainer,
  Title: InputTitle,
  Box: InputBox,
  Underline: InputUnderLine,
  ErrorMessage: InputErrorMessage,
});
