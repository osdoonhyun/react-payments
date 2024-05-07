import HStack from '@components/@common/layout/HStack';
import { Input } from '../atoms/Input';
import { CardFormProps } from '@/type/formType';
import { allTouched, findErrorMessage, hasErrors } from '@/utils/form';

export default function ExpirationDate({
  getFieldProps,
  touched,
  errors,
  autoFocusMethods,
}: CardFormProps) {
  const { autoFocusRefs } = autoFocusMethods;

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
          ref={autoFocusRefs[5] ?? null}
          {...getFieldProps('expirationMonth')}
        />
        <span>/</span>
        <Input
          type='text'
          placeholder='YY'
          maxLength={2}
          ref={autoFocusRefs[6] ?? null}
          {...getFieldProps('expirationYear')}
        />
      </Input.Box>
    </Input.Container>
  );
}
