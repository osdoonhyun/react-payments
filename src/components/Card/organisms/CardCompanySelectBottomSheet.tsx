import { Dispatch, SetStateAction } from 'react';
import useOverlay from '@/hooks/useOverlay';
import CardCompany from '@/components/CardForm/molecules/CardCompany';
import { BottomSheet } from '@components/CardForm/molecules/bottomSheet/BottomSheet';
import { CardCompany as CardCompanyType } from '@/type/cardType';
import { FormValues } from '@/type/formType';

interface CardCompanySelectBottomSheetProps {
  onChange: Dispatch<SetStateAction<FormValues>>;
  onAutoFocus?: () => void;
}

export default function CardCompanySelectBottomSheet({
  onChange,
  onAutoFocus,
}: CardCompanySelectBottomSheetProps) {
  const { close: closeBottomSheet } = useOverlay();

  const handleCompanyClick = (company: CardCompanyType) => {
    onChange((prevCardInfo) => ({
      ...prevCardInfo,
      cardCompany: company,
    }));

    onAutoFocus ? onAutoFocus() : null;
    closeBottomSheet();
  };

  return (
    <BottomSheet.Root>
      <BottomSheet.Dimmer>
        <BottomSheet.Content style='modal-grid'>
          <CardCompany onCardCompanyClick={handleCompanyClick} />
        </BottomSheet.Content>
      </BottomSheet.Dimmer>
    </BottomSheet.Root>
  );
}
