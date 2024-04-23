import useForm from '@/hooks/useForm';
import { Input } from '../atoms/Input';

type PinNumberProps = {
  getFieldProps: ReturnType<typeof useForm>['getFieldProps'];
  touched: ReturnType<typeof useForm>['touched'];
  errors: ReturnType<typeof useForm>['errors'];
};

export default function PinNumber({
  getFieldProps,
  touched,
  errors,
}: PinNumberProps) {
  return (
    <>
      <Input.Container>
        <Input.Title>카드 비밀번호</Input.Title>
        <Input
          type='text'
          className='w-15'
          maxLength={1}
          {...getFieldProps('pinNumber1')}
        />
        <Input
          type='text'
          className='w-15'
          maxLength={1}
          {...getFieldProps('pinNumber2')}
        />
        <Input type='password' className='w-15' value={0} readOnly />
        <Input type='password' className='w-15' value={0} readOnly />
      </Input.Container>

      {[touched.pinNumber1, touched.pinNumber2].every(Boolean) &&
        [errors.pinNumber1, errors.pinNumber2].some(Boolean) && (
          <span>{errors.pinNumber1 || errors.pinNumber2}</span>
        )}
    </>
  );
}
