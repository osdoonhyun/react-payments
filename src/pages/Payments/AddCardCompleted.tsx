import { ChangeEvent } from 'react';
import { useCardInfoContext } from '@/context/CardInfo';
import CardDisplay from '@components/Card/organisms/CardDisplay/CardDisplay';
import { Input } from '@components/CardForm/atoms/Input';
import PageTitle from '@components/@common/PageTitle';
import HStack from '@components/@common/layout/HStack';
import VStack from '@components/@common/layout/VStack';

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

  return (
    <div className='flex-column-center'>
      <HStack>
        <PageTitle className='mb-10'>카드등록이 완료되었습니다.</PageTitle>
      </HStack>

      <CardDisplay size='big' cardInfo={cardInfo} />

      <Input.Container size='w-100'>
        <VStack>
          <Input.Underline
            className='w-75'
            type='text'
            placeholder='카드의 별칭을 입력해주세요.(선택)'
            maxLength={10}
            autoFocus
            name='cardAlias'
            value={cardInfo.cardAlias}
            onChange={handleCardAliasChange}
          />
          <div className='input-flex-end w-75'>
            <Input.Title>{`${cardInfo.cardAlias.length}/${10}`}</Input.Title>
          </div>
        </VStack>
      </Input.Container>

      <div className='button-box mt-50'>
        <button
          onClick={onNext}
          className='button-text button-success button-active'
        >
          완료
        </button>
      </div>
    </div>
  );
}
