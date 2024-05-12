import { useEffect } from 'react';
import useForm from '@/hooks/useForm';
import useOverlay from '@/hooks/useOverlay';
import { useCardInfoContext } from '@/context/CardInfo';
import PageTitle from '@components/@common/PageTitle';
import CardDisplay from '@components/Card/organisms/CardDisplay/CardDisplay';
import CardHolderName from '@components/CardForm/molecules/CardHolderName';
import CardNumber from '@components/CardForm/molecules/CardNumber';
import ExpirationDate from '@components/CardForm/molecules/ExpirationDate';
import PinNumber from '@components/CardForm/molecules/PinNumber';
import VerificationCode from '@components/CardForm/molecules/VerificationCode';
import CardCompanySelect from '@components/Card/organisms/CardCompanySelect';
import Button from '@components/@common/button/atoms/Button';
import ButtonDiv from '@components/@common/button/atoms/ButtonDiv';
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

  const { handleSubmit, submitButtonRef, ...rest } = useForm({
    values: cardInfo,
    setValues: setCardInfo,
    validate: cardValidate,
    onSubmit,
  });

  const handleCardDisplayClick = () => {
    openBottomSheet({
      node: (
        <CardCompanySelect
          onChange={setCardInfo}
          onAutoFocus={autoFocusStart}
        />
      ),
    });
  };

  const allFieldsTouched = Object.keys(inputFields).every(
    (key) => rest.touched[key] === true
  );

  const hasNoErrors = Object.values(rest.errors).every((error) => error === '');

  const isNextButtonDisabled = !allFieldsTouched || !hasNoErrors;

  const autoFocusStart = () => {
    rest.autoFocusMethods.autoFocusRefs[1].current?.focus();
  };

  useEffect(() => {
    openBottomSheet({
      node: (
        <CardCompanySelect
          onChange={setCardInfo}
          onAutoFocus={autoFocusStart}
        />
      ),
    });
  }, []);

  return (
    <>
      <PageTitle onPrevious={onPrevious}>카드 추가</PageTitle>

      {/* Card */}
      <CardDisplay
        size='small'
        isHover={true}
        cardInfo={cardInfo as FormType}
        onOpen={handleCardDisplayClick}
      />

      {/* CardForm */}
      <form onSubmit={handleSubmit}>
        <CardNumber {...rest} />
        <ExpirationDate {...rest} />
        <CardHolderName values={cardInfo as FormType} {...rest} />
        <VerificationCode {...rest} />
        <PinNumber {...rest} />
      </form>

      <ButtonDiv>
        <Button
          type='submit'
          onClick={onSubmit}
          ref={submitButtonRef}
          className='button-text button-success button-active'
          disabled={isNextButtonDisabled}
        >
          다음
        </Button>
      </ButtonDiv>
    </>
  );
}
