import { Card } from '../atoms/Card';
import { maskText } from '@/utils/maskText';
import { FormType } from '@/type/formType';

type CreditCardProps = {
  cardInfo: FormType;
};

export default function CreditCard({ cardInfo }: CreditCardProps) {
  const {
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
    <Card.Box>
      <Card.Empty>
        <Card.Top />

        <Card.Middle>
          <Card.Size size='small' hasChip />
        </Card.Middle>

        <Card.Bottom>
          <Card.Bottom as='number'>
            <Card.Text fontSize='big'>{`${cardNumber1}  ${cardNumber2}  ${maskedCardNumber3}  ${maskedCardNumber4}`}</Card.Text>
          </Card.Bottom>
          <Card.Bottom as='info'>
            <Card.Text>{cardHolderName || 'NAME'}</Card.Text>
            <Card.Text>
              {`${expirationMonth || 'MM'} / ${expirationYear || 'YY'}`}
            </Card.Text>
          </Card.Bottom>
        </Card.Bottom>
      </Card.Empty>
    </Card.Box>
  );
}
