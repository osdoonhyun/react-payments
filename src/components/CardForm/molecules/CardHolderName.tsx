import useForm from '@/hooks/useForm';
import { Input } from '../atoms/Input';
import { CARD_HOLDER_NAME_MAX_LENGTH } from '@/utils/cardValidations';
import { FormType } from '@/type/formType';
import HStack from '@components/@common/layout/HStack';
import { allTouched, findErrorMessage, hasErrors } from '@/utils/form';

type CardHolderNameProps = {
  getFieldProps: ReturnType<typeof useForm>['getFieldProps'];
  touched: ReturnType<typeof useForm>['touched'];
  errors: ReturnType<typeof useForm>['errors'];
  values: FormType;
};

export default function CardHolderName({
  getFieldProps,
  touched,
  errors,
  values: { cardHolderName },
}: CardHolderNameProps) {
  const cardHolderNameErrors = [errors.cardHolderName];
  const cardHolderNameTouched = [touched.cardHolderName];

  const hasCardHolderNameErrors = hasErrors(cardHolderNameErrors);
  const allCardHolderNameTouched = allTouched(cardHolderNameTouched);
  const cardHolderNameErrorMessage = findErrorMessage(cardHolderNameErrors);

  return (
    <Input.Container>
      <div className='input-space-between'>
        <Input.Title>카드 소유자 이름(선택)</Input.Title>
        <Input.Title>{`${cardHolderName.length}/${CARD_HOLDER_NAME_MAX_LENGTH}`}</Input.Title>
      </div>
      <HStack className='input-space-between'>
        {hasCardHolderNameErrors && allCardHolderNameTouched && (
          <Input.ErrorMessage errorMessage={cardHolderNameErrorMessage} />
        )}
      </HStack>

      <Input
        type='text'
        maxLength={CARD_HOLDER_NAME_MAX_LENGTH}
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        {...getFieldProps('cardHolderName')}
      />
    </Input.Container>
  );
}
