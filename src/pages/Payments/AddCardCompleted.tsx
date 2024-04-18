import useForm from '@/hooks/useForm';
import { useCardInfoContext } from '@/context/Form';
import PageTitle from '@components/@common/PageTitle';
import Button from '@components/@common/button/molecules/Button';
import HStack from '@components/@common/layout/HStack';
import { Card } from '@components/Card/atoms/Card';
import { Input } from '@components/CardForm/atoms/Input';
import { maskText } from '@/utils/maskText';
import { cardValidate } from '@/utils/cardValidations';

type AddCardCompletedProps = {
  onNext: () => void;
};

export default function AddCardCompleted({ onNext }: AddCardCompletedProps) {
  const { cardInfo, setCardInfo } = useCardInfoContext();

  const onSubmit = () => {
    onNext();
  };

  const { getFieldProps } = useForm({
    values: cardInfo,
    setValues: setCardInfo,
    validate: cardValidate,
    onSubmit,
  });

  const maskedCardNumber3 = maskText(cardInfo.cardNumber3);
  const maskedCardNumber4 = maskText(cardInfo.cardNumber4);

  return (
    <div className='root'>
      <div className='app flex-column-center'>
        <HStack>
          <PageTitle className='mb-10'>카드등록이 완료되었습니다.</PageTitle>
        </HStack>

        <Card.Box>
          <Card.Size size='big'>
            <Card.Top>
              <Card.Text fontSize='big'>{cardInfo.cardAlias}</Card.Text>
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
              {...getFieldProps('cardAlias')}
            />
          </HStack>
        </Input.Container>

        <Button className='mt-50' onClick={onSubmit}>
          다음
        </Button>
      </div>
    </div>
  );
}
