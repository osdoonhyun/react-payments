import { CardCompany as CardCompanyType } from '@/type/cardType';
import { Input } from '../atoms/Input';

const CARD_COMPANIES: CardCompanyType[] = [
  { id: 1, name: '신한 카드', color: 'blue' },
  { id: 2, name: '삼성 카드', color: 'navy' },
  { id: 3, name: '하나 카드', color: 'pink' },
  { id: 4, name: '국민 카드', color: 'green' },
  { id: 5, name: '우리 카드', color: 'red' },
  { id: 6, name: '비씨 카드', color: 'orange' },
  { id: 7, name: '현대 카드', color: 'purple' },
  { id: 8, name: '롯데 카드', color: 'yellow' },
];

type CardCompanyProps = {
  onCardCompanyClick: (company: CardCompanyType) => void;
};

export default function CardCompany({ onCardCompanyClick }: CardCompanyProps) {
  return (
    <>
      {CARD_COMPANIES.map((company) => (
        <label
          key={company.id}
          htmlFor={company.name}
          className='modal-item-container'
        >
          <Input
            type='radio'
            id={company.name}
            name={company.name}
            className='visually-hidden'
            onChange={(e) => {
              e.stopPropagation();
              onCardCompanyClick(company);
            }}
          />
          <div
            className='modal-item-dot'
            style={{ backgroundColor: company.color }}
          />
          <span className='modal-item-name'>{company.name}</span>
        </label>
      ))}
    </>
  );
}
