import AddCard from './AddCard';
import AddCardCompleted from './AddCardCompleted';
import CardList from '../CardList';
import { CardInfoProvider } from '@/context/CardInfo';
import { OverlayProvider } from '@/context/Overlay';
import { useStepper } from '@/hooks/useStepper';

export type StepType = typeof CARD_REGISTRATION_STEPS;

// eslint-disable-next-line react-refresh/only-export-components
export const CARD_REGISTRATION_STEPS = [
  '카드_입력',
  '카드_입력_완료',
  '카드_목록',
] as const;

export default function Payments() {
  const { Stepper, Step, setStep } = useStepper<StepType>(
    CARD_REGISTRATION_STEPS
  );

  const onChangeStep = (step: 0 | 1 | 2) => () => {
    setStep(CARD_REGISTRATION_STEPS[step]);
  };

  return (
    <OverlayProvider>
      <CardInfoProvider>
        <div className='root'>
          <div className='app'>
            <Stepper>
              <Step name={CARD_REGISTRATION_STEPS[0]}>
                <AddCard
                  onNext={onChangeStep(1)}
                  onPrevious={onChangeStep(2)}
                />
              </Step>
              <Step name={CARD_REGISTRATION_STEPS[1]}>
                <AddCardCompleted onNext={onChangeStep(2)} />
              </Step>
              <Step name={CARD_REGISTRATION_STEPS[2]}>
                <CardList
                  onNext={onChangeStep(0)}
                  moveToStep={onChangeStep(1)}
                />
              </Step>
            </Stepper>
          </div>
        </div>
      </CardInfoProvider>
    </OverlayProvider>
  );
}
