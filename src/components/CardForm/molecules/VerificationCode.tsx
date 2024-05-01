import useForm from '@/hooks/useForm';
import { Input } from '../atoms/Input';
import HStack from '@components/@common/layout/HStack';
import { allTouched, findErrorMessage, hasErrors } from '@/utils/form';

type VerificationCodeProps = {
  getFieldProps: ReturnType<typeof useForm>['getFieldProps'];
  touched: ReturnType<typeof useForm>['touched'];
  errors: ReturnType<typeof useForm>['errors'];
};

export default function VerificationCode({
  getFieldProps,
  touched,
  errors,
}: VerificationCodeProps) {
  const verificationCodeErrors = [errors.verificationCode];
  const verificationCodeTouched = [touched.verificationCode];

  const hasVerificationCodeErrors = hasErrors(verificationCodeErrors);
  const allVerificationCodeTouched = allTouched(verificationCodeTouched);
  const verificationCodeErrorMessage = findErrorMessage(verificationCodeErrors);

  return (
    <Input.Container>
      <HStack className='input-space-between'>
        <Input.Title>보안코드(CVC/CVV)</Input.Title>
        {hasVerificationCodeErrors && allVerificationCodeTouched && (
          <Input.ErrorMessage errorMessage={verificationCodeErrorMessage} />
        )}
      </HStack>

      <Input
        type='password'
        className='w-25'
        maxLength={3}
        {...getFieldProps('verificationCode')}
      />
    </Input.Container>
  );
}
