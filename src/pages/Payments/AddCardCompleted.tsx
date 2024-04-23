import { ChangeEvent } from 'react';
import { useCardInfoContext } from '@/context/CardInfo';
import { Card } from '@components/Card/atoms/Card';
import { Input } from '@components/CardForm/atoms/Input';
import Button from '@components/@common/button/molecules/Button';
import PageTitle from '@components/@common/PageTitle';
import HStack from '@components/@common/layout/HStack';
import { maskText } from '@/utils/maskText';

type AddCardCompletedProps = {
  onNext: () => void;
};

export default function AddCardCompleted({ onNext }: AddCardCompletedProps) {
  const { cardInfo, setCardInfo, updateCard } = useCardInfoContext();

  const handleCardAliasChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      [name]: value,
    }));

    updateCard(name, value ?? cardInfo.cardCompany.name, cardInfo);
  };

  const maskedCardNumber3 = maskText(cardInfo.cardNumber3);
  const maskedCardNumber4 = maskText(cardInfo.cardNumber4);

  return (
    <div className='flex-column-center'>
      <HStack>
        <PageTitle className='mb-10'>카드등록이 완료되었습니다.</PageTitle>
      </HStack>

      <Card.Box style={{ backgroundColor: cardInfo.cardCompany.color }}>
        <Card.Size size='big'>
          <Card.Top>
            <Card.Text fontSize='big'>{cardInfo.cardCompany.name}</Card.Text>
          </Card.Top>

          <Card.Middle>
            <Card.Size size='big' hasChip />
          </Card.Middle>

          <Card.Bottom>
            <Card.Bottom as='number'>
              <Card.Text fontSize='big'>{`${cardInfo.cardNumber1}  ${cardInfo.cardNumber2}  ${maskedCardNumber3}  ${maskedCardNumber4}`}</Card.Text>
            </Card.Bottom>
            <Card.Bottom as='info'>
              <Card.Text fontSize='big'>{cardInfo.cardHolderName}</Card.Text>
              <Card.Text fontSize='big'>{`${cardInfo.expirationMonth} / ${cardInfo.expirationYear}`}</Card.Text>
            </Card.Bottom>
          </Card.Bottom>
        </Card.Size>
      </Card.Box>

      <Input.Container size='w-100'>
        <HStack>
          <Input.Underline
            className='w-75'
            type='text'
            placeholder='카드의 별칭을 입력해주세요.'
            maxLength={10}
            autoFocus
            name='cardAlias'
            value={cardInfo.cardAlias}
            onChange={handleCardAliasChange}
          />
        </HStack>
      </Input.Container>

      <Button className='mt-50' onClick={onNext}>
        다음
      </Button>
    </div>
  );
}
