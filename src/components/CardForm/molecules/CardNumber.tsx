import useForm from '@/hooks/useForm';
import { Input } from '../atoms/Input';
import HStack from '@components/@common/layout/HStack';
import { allTouched, findErrorMessage, hasErrors } from '@/utils/form';

type CardNumberProps = {
  getFieldProps: ReturnType<typeof useForm>['getFieldProps'];
  touched: ReturnType<typeof useForm>['touched'];
  errors: ReturnType<typeof useForm>['errors'];
};

export default function CardNumber({
  getFieldProps,
  touched,
  errors,
}: CardNumberProps) {
  const cardNumberErrors = [
    errors.cardNumber1,
    errors.cardNumber2,
    errors.cardNumber3,
    errors.cardNumber4,
  ];
  const cardNumberTouched = [
    touched.cardNumber1,
    touched.cardNumber2,
    touched.cardNumber3,
    touched.cardNumber4,
  ];

  const hasCardNumberErrors = hasErrors(cardNumberErrors);
  const allCardNumberTouched = allTouched(cardNumberTouched);
  const cardNumberErrorMessage = findErrorMessage(cardNumberErrors);

  return (
    <>
      <Input.Container>
        <HStack className='input-space-between'>
          <Input.Title>카드 번호</Input.Title>
          {hasCardNumberErrors && allCardNumberTouched && (
            <Input.ErrorMessage errorMessage={cardNumberErrorMessage} />
          )}
        </HStack>

        <Input.Box>
          <Input type='text' maxLength={4} {...getFieldProps('cardNumber1')} />
          <div>-</div>
          <Input type='text' maxLength={4} {...getFieldProps('cardNumber2')} />
          <div>-</div>
          <Input
            type='password'
            maxLength={4}
            {...getFieldProps('cardNumber3')}
          />
          <div>-</div>
          <Input
            type='password'
            maxLength={4}
            {...getFieldProps('cardNumber4')}
          />
        </Input.Box>
      </Input.Container>
    </>
  );
}
