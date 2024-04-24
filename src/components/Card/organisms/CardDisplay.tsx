import { Card } from '../atoms/Card';
import { maskText } from '@/utils/maskText';
import { FormValues } from '@/type/formType';

type CardDisplayProps = {
  cardInfo: FormValues;
  onOpen?: () => void;
  close?: () => void;
};

export default function CardDisplay({ cardInfo, onOpen }: CardDisplayProps) {
  const {
    cardCompany,
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    cardHolderName,
    expirationMonth,
    expirationYear,
  } = cardInfo;

  const maskedCardNumber3 = maskText(cardNumber3);
  const maskedCardNumber4 = maskText(cardNumber4);

  return (
    <Card.Box onClick={onOpen}>
      <Card.Empty style={{ backgroundColor: cardCompany.color }}>
        <Card.Top>
          <Card.Text fontSize='big'>{cardCompany.name}</Card.Text>
        </Card.Top>

        <Card.Middle>
          <Card.Size size='small' hasChip />
        </Card.Middle>

        <Card.Bottom>
          <Card.Bottom as='number'>
            <Card.Text fontSize='big'>{`${cardNumber1}  ${cardNumber2}  ${maskedCardNumber3}  ${maskedCardNumber4}`}</Card.Text>
          </Card.Bottom>
          <Card.Bottom as='info'>
            <Card.Text className='text-overflow-ellipsis'>
              {cardHolderName || 'NAME'}
            </Card.Text>
            <Card.Text>
              {`${expirationMonth || 'MM'} / ${expirationYear || 'YY'}`}
            </Card.Text>
          </Card.Bottom>
        </Card.Bottom>
      </Card.Empty>
    </Card.Box>
  );
}
