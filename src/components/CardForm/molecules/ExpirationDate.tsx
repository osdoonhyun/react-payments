import useForm from '@/hooks/useForm';
import { Input } from '../atoms/Input';

type ExpirationDateProps = {
  getFieldProps: ReturnType<typeof useForm>['getFieldProps'];
  touched: ReturnType<typeof useForm>['touched'];
  errors: ReturnType<typeof useForm>['errors'];
};

export default function ExpirationDate({
  getFieldProps,
  touched,
  errors,
}: ExpirationDateProps) {
  return (
    <>
      <Input.Container>
        <Input.Title>만료일</Input.Title>
        <Input.Box className='w-50'>
          <Input
            type='text'
            placeholder='MM'
            maxLength={2}
            {...getFieldProps('expirationMonth')}
          />
          <span>/</span>
          <Input
            type='text'
            placeholder='YY'
            maxLength={2}
            {...getFieldProps('expirationYear')}
          />
        </Input.Box>
      </Input.Container>

      {errors.expirationMonth && touched.expirationMonth && (
        <span>{errors.expirationMonth}</span>
      )}
    </>
  );
}
