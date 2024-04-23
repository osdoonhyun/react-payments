import { useState } from 'react';
import AddCard from './AddCard';
import AddCardCompleted from './AddCardCompleted';
import CardList from '../CardList';
import { CardInfoProvider } from '@/context/CardInfo';
import { OverlayProvider } from '@/context/Overlay';
import { initialFormData } from '@/constants/form';
import { FormValues } from '@/type/formType';

type StepType = (typeof STEP)[keyof typeof STEP];

const STEP = {
  INITIAL_STEP: '카드_입력',
  ADD_CARD: '카드_입력',
  ADD_CARD_COMPLETED: '카드_입력_완료',
  CARD_LIST: '카드_목록',
} as const;

export default function Payments() {
  const [step, setStep] = useState<StepType>(STEP.INITIAL_STEP);
  const [cardInfo, setCardInfo] = useState<FormValues>(initialFormData);

  return (
    <OverlayProvider>
      <CardInfoProvider cardInfo={cardInfo} setCardInfo={setCardInfo}>
        <div className='root'>
          <div className='app'>
            {step === STEP.INITIAL_STEP && (
              <AddCard
                onPrevious={() => setStep(STEP.CARD_LIST)}
                onNext={() => setStep(STEP.ADD_CARD_COMPLETED)}
              />
            )}
            {step === STEP.ADD_CARD_COMPLETED && (
              <AddCardCompleted onNext={() => setStep(STEP.CARD_LIST)} />
            )}
            {step === STEP.CARD_LIST && (
              <CardList
                onMoveToCompleted={() => setStep(STEP.ADD_CARD_COMPLETED)}
                onNext={() => setStep(STEP.INITIAL_STEP)}
              />
            )}
          </div>
        </div>
      </CardInfoProvider>
    </OverlayProvider>
  );
}
