import { useCardInfoContext } from '@/context/CardInfo';
import CardNickname from '@components/Card/atoms/CardNickname';
import { Card } from '@components/Card/atoms/Card';
import CardDisplay from '@components/Card/organisms/CardDisplay/CardDisplay';
import PageTitle from '@components/@common/PageTitle';
import HStack from '@components/@common/layout/HStack';
import { FormValues } from '@/type/formType';
import { sortByDateDescending } from '@/utils/sort';

type CardListProps = {
  onNext: () => void;
  moveToStep: () => void;
};

export default function CardList({ onNext, moveToStep }: CardListProps) {
  const { cardList, setCardInfo, deleteCard, resetCard } = useCardInfoContext();

  const moveToAddCardCompletedPage = (card: FormValues) => {
    setCardInfo(card);
    moveToStep();
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

      <div className='card-list-body w-75'>
        {sortByDateDescending(cardList).map((card: FormValues) => (
          <div key={card.id} className='flex-column-center '>
            <CardDisplay
              size='small'
              cardInfo={card}
              onOpen={() => moveToAddCardCompletedPage(card)}
            />
            <div className='flex-center w-60 mt-3'>
              <CardNickname text={card.cardAlias || card.cardCompany.name} />
              <span className='mx-auto'>|</span>
              <button
                className='button-delete'
                onClick={() => handleDeleteButton(card)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='card-list-footer'>
        <Card.Box>
          <Card.Empty onClick={moveToAddCardPage}>+</Card.Empty>
        </Card.Box>
      </div>
    </div>
  );
}
