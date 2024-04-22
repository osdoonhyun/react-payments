import { Dispatch, SetStateAction } from 'react';
import useOverlay from '@/hooks/useOverlay';
import { Input } from '@components/CardForm/atoms/Input';
import { CardCompany } from '@/type/cardType';
import { FormValues } from '@/type/formType';

const cardCompanies: CardCompany[] = [
  { id: 1, name: '신한 카드', color: 'blue' },
  { id: 2, name: '삼성 카드', color: 'navy' },
  { id: 3, name: '하나 카드', color: 'pink' },
  { id: 4, name: '국민 카드', color: 'green' },
  { id: 5, name: '우리 카드', color: 'red' },
  { id: 6, name: '비씨 카드', color: 'orange' },
  { id: 7, name: '현대 카드', color: 'purple' },
  { id: 8, name: '롯데 카드', color: 'yellow' },
];

interface CardCompanySelectBottomSheetProps {
  onChange: Dispatch<SetStateAction<FormValues>>;
}

export default function CardCompanySelectBottomSheet({
  onChange,
}: CardCompanySelectBottomSheetProps) {
  const { close: closeBottomSheet } = useOverlay();

  const handleCompanyClick = (company: CardCompany) => {
    onChange((prev) => ({
      ...prev,
      cardCompany: company,
    }));

    closeBottomSheet();
  };

  return (
    <div className='modal-dimmed' onClick={closeBottomSheet}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-grid'>
          {cardCompanies.map((company) => (
            // TODO:  <CardCompanyItem {...card} />
            <label key={company.name} htmlFor={company.name}>
              <Input
                type='radio'
                id={company.name}
                name={company.name}
                className='visually-hidden'
                onChange={(e) => {
                  e.stopPropagation();
                  handleCompanyClick(company);
                }}
              />
              <div
                className='modal-item-dot'
                style={{ backgroundColor: company.color }}
              />
              <span className='modal-item-name'>{company.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
