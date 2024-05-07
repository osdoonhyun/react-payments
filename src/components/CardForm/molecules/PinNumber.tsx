import HStack from '@components/@common/layout/HStack';
import { Input } from '../atoms/Input';
import { CardFormProps } from '@/type/formType';
import { hasErrors, allTouched, findErrorMessage } from '@/utils/form';

export default function PinNumber({
  getFieldProps,
  touched,
  errors,
  autoFocusMethods,
}: CardFormProps) {
  const { autoFocusRefs } = autoFocusMethods;

  const pinNumberErrors = [errors.pinNumber1, errors.pinNumber2];
  const pinNumberTouched = [touched.pinNumber1, touched.pinNumber2];

  const hasPinNumberErrors = hasErrors(pinNumberErrors);
  const allPinNumberTouched = allTouched(pinNumberTouched);
  const pinNumberErrorMessage = findErrorMessage(pinNumberErrors);

  return (
    <Input.Container>
      <HStack className='input-space-between'>
        <Input.Title>카드 비밀번호</Input.Title>
        {hasPinNumberErrors && allPinNumberTouched && (
          <Input.ErrorMessage errorMessage={pinNumberErrorMessage} />
        )}
      </HStack>

      <Input
        type='text'
        className='w-15'
        maxLength={1}
        ref={autoFocusRefs[9] ?? null}
        {...getFieldProps('pinNumber1')}
      />
      <Input
        type='text'
        className='w-15'
        maxLength={1}
        ref={autoFocusRefs[10] ?? null}
        {...getFieldProps('pinNumber2')}
      />
      <Input type='password' className='w-15' value={0} readOnly />
      <Input type='password' className='w-15' value={0} readOnly />
    </Input.Container>
  );
}
