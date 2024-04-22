import { useCardInfoContext } from '@/context/Form';
import CardNickname from '@components/Card/atoms/CardNickname';
import { Card } from '@components/Card/atoms/Card';
import CreditCard from '@components/Card/organisms/CreditCard';
import PageTitle from '@components/@common/PageTitle';
import HStack from '@components/@common/layout/HStack';
import { FormValues } from '@/type/formType';

type CardListProps = {
  onNext: () => void;
  onMoveToCompleted: () => void;
};

export default function CardList({ onNext, onMoveToCompleted }: CardListProps) {
  const { cardList, setCardInfo, deleteCard, resetCard } = useCardInfoContext();

  const moveToAddCardCompletedPage = (card: FormValues) => {
    setCardInfo(card);
    onMoveToCompleted();
  };

  const moveToAddCardPage = () => {
    resetCard();
    onNext();
  };

  const handleDeleteButton = (card: FormValues) => {
    if (window.confirm(`${card.cardAlias}를 삭제하시겠습니까?`)) {
      deleteCard(card);
    }
  };

  return (
    <div className='flex-column-center'>
      <HStack>
        <PageTitle className='mb-10'>보유 카드</PageTitle>
      </HStack>

      {cardList.map((card: FormValues, index) => (
        <>
          <div
            key={`card-list-${card.cardNumber1}-${index}`}
            onClick={() => moveToAddCardCompletedPage(card)}
          >
            <CreditCard cardInfo={card} />
            <CardNickname text={card.cardAlias} />
          </div>
          <button onClick={() => handleDeleteButton(card)}>삭제</button>
        </>
      ))}

      <Card.Box>
        <Card.Empty onCardClick={moveToAddCardPage}>+</Card.Empty>
      </Card.Box>
    </div>
  );
}
