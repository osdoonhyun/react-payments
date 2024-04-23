import { useEffect } from 'react';
import useForm from '@/hooks/useForm';
import useOverlay from '@/hooks/useOverlay';
import { useCardInfoContext } from '@/context/Form';
import PageTitle from '@components/@common/PageTitle';
import Button from '@components/@common/button/molecules/Button';
import CreditCard from '@components/Card/organisms/CreditCard';
import CardHolderName from '@components/CardForm/molecules/CardHolderName';
import CardNumber from '@components/CardForm/molecules/CardNumber';
import ExpirationDate from '@components/CardForm/molecules/ExpirationDate';
import PinNumber from '@components/CardForm/molecules/PinNumber';
import VerificationCode from '@components/CardForm/molecules/VerificationCode';
import CardCompanyBottomSheet from '@components/Card/organisms/CardCompanySelectBottomSheet';
import { cardValidate } from '@/utils/cardValidations';
import { FormType } from '@/type/formType';

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

  // TODO: CreditCard -> CardDisplay로 변경
  const handleCreditCardClick = () => {
    openBottomSheet({
      node: <CardCompanyBottomSheet onChange={setCardInfo} />,
    });
  };

  useEffect(() => {
    openBottomSheet({
      node: <CardCompanyBottomSheet onChange={setCardInfo} />,
    });
  }, []);

  return (
    <>
      <PageTitle onPrevious={onPrevious}>카드 추가</PageTitle>

      {/* Card */}
      <CreditCard
        cardInfo={cardInfo as FormType}
        onOpen={handleCreditCardClick}
        {...rest}
      />

      {/* CardForm */}
      <form onSubmit={handleSubmit}>
        <CardNumber {...rest} />
        <ExpirationDate {...rest} />
        <CardHolderName values={cardInfo as FormType} {...rest} />
        <VerificationCode {...rest} />
        <PinNumber {...rest} />

        <Button onClick={onSubmit}>다음</Button>
      </form>
    </>
  );
}
