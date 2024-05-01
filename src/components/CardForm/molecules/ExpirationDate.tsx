import useForm from '@/hooks/useForm';
import { Input } from '../atoms/Input';
import HStack from '@components/@common/layout/HStack';
import { allTouched, findErrorMessage, hasErrors } from '@/utils/form';

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
  const expirationDateErrors = [errors.expirationMonth, errors.expirationYear];
  const expirationDateTouched = [
    touched.expirationMonth,
    touched.expirationYear,
  ];

  const hasExpirationDateErrors = hasErrors(expirationDateErrors);
  const allExpirationDateTouched = allTouched(expirationDateTouched);
  const expirationDateErrorMessage = findErrorMessage(expirationDateErrors);

  return (
    <Input.Container>
      <HStack className='input-space-between'>
        <Input.Title>만료일</Input.Title>
        {hasExpirationDateErrors && allExpirationDateTouched && (
          <Input.ErrorMessage errorMessage={expirationDateErrorMessage} />
        )}
      </HStack>

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
  );
}
