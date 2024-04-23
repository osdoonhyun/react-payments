import { useEffect } from 'react';
import useForm from '@/hooks/useForm';
import useOverlay from '@/hooks/useOverlay';
import { useCardInfoContext } from '@/context/CardInfo';
import PageTitle from '@components/@common/PageTitle';
import Button from '@components/@common/button/molecules/Button';
import CardDisplay from '@components/Card/organisms/CardDisplay';
import CardHolderName from '@components/CardForm/molecules/CardHolderName';
import CardNumber from '@components/CardForm/molecules/CardNumber';
import ExpirationDate from '@components/CardForm/molecules/ExpirationDate';
import PinNumber from '@components/CardForm/molecules/PinNumber';
import VerificationCode from '@components/CardForm/molecules/VerificationCode';
import CardCompanyBottomSheet from '@components/Card/organisms/CardCompanySelectBottomSheet';
import { cardValidate } from '@/utils/cardValidations';
import { FormType } from '@/type/formType';
import { inputFields } from '@/constants/form';

type AddCardProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export default function AddCard({ onPrevious, onNext }: AddCardProps) {
  const { cardInfo, setCardInfo, addCard } = useCardInfoContext();
  const { open: openBottomSheet } = useOverlay();

  const onSubmit = () => {
    addCard(cardInfo);
    onNext();
  };

  const { handleSubmit, ...rest } = useForm({
    values: cardInfo,
    setValues: setCardInfo,
    validate: cardValidate,
    onSubmit,
  });

  const handleCardDisplayClick = () => {
    openBottomSheet({
      node: <CardCompanyBottomSheet onChange={setCardInfo} />,
    });
  };

  const allFieldsTouched = Object.keys(inputFields).every(
    (key) => rest.touched[key] === true
  );

  const hasNoErrors = Object.values(rest.errors).every((error) => error === '');

  const isNextButtonDisabled = !allFieldsTouched || !hasNoErrors;

  // TODO: AddPage가 아닌 Funnel 시작 시 openBottomSheet
  useEffect(() => {
    openBottomSheet({
      node: <CardCompanyBottomSheet onChange={setCardInfo} />,
    });
  }, []);

  return (
    <>
      <PageTitle onPrevious={onPrevious}>카드 추가</PageTitle>

      {/* Card */}
      <CardDisplay
        cardInfo={cardInfo as FormType}
        onOpen={handleCardDisplayClick}
        {...rest}
      />

      {/* CardForm */}
      <form onSubmit={handleSubmit}>
        <CardNumber {...rest} />
        <ExpirationDate {...rest} />
        <CardHolderName values={cardInfo as FormType} {...rest} />
        <VerificationCode {...rest} />
        <PinNumber {...rest} />
        {/* TODO: 버튼 타입을 footer로 빼서 시멘틱하게 변경하기 */}
      </form>

      <Button type='submit' disabled={isNextButtonDisabled} onClick={onSubmit}>
        다음
      </Button>
    </>
  );
}
