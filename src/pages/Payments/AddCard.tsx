import useForm from '@/hooks/useForm';
import { useCardInfoContext } from '@/context/Form';
import PageTitle from '@components/@common/PageTitle';
import Button from '@components/@common/button/molecules/Button';
import CreditCard from '@components/Card/organisms/CreditCard';
import CardHolderName from '@components/CardForm/molecules/CardHolderName';
import CardNumber from '@components/CardForm/molecules/CardNumber';
import ExpirationDate from '@components/CardForm/molecules/ExpirationDate';
import PinNumber from '@components/CardForm/molecules/PinNumber';
import VerificationCode from '@components/CardForm/molecules/VerificationCode';
import { cardValidate } from '@/utils/cardValidations';
import { FormType } from '@/type/formType';

type AddCardProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export default function AddCard({ onPrevious, onNext }: AddCardProps) {
  const { cardInfo, setCardInfo } = useCardInfoContext();

  const onSubmit = () => {
    onNext();
  };

  const { handleSubmit, ...rest } = useForm({
    values: cardInfo,
    setValues: setCardInfo,
    validate: cardValidate,
    onSubmit,
  });

  return (
    <div className='root'>
      <div className='app'>
        <PageTitle onPrevious={onPrevious}>카드 추가</PageTitle>

        <form onSubmit={handleSubmit}>
          {/* Card */}
          <CreditCard cardInfo={cardInfo as FormType} />

          {/* CardForm */}
          <CardNumber {...rest} />
          <ExpirationDate {...rest} />
          <CardHolderName values={cardInfo as FormType} {...rest} />
          <VerificationCode {...rest} />
          <PinNumber {...rest} />

          <Button>다음</Button>
        </form>
      </div>
    </div>
  );
}
