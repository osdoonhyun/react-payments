import useForm from '@/hooks/useForm';
import { Input } from '../atoms/Input';

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
  return (
    <>
      <Input.Container>
        <Input.Title>보안코드(CVC/CVV)</Input.Title>
        <Input
          type='password'
          className='w-25'
          maxLength={3}
          {...getFieldProps('verificationCode')}
        />
      </Input.Container>

      {errors.verificationCode && touched.verificationCode && (
        <span>{errors.verificationCode}</span>
      )}
    </>
  );
}
