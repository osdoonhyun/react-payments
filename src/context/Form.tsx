import {
  createContext,
  ReactNode,
  useContext,
  SetStateAction,
  Dispatch,
} from 'react';
import { FormValues } from '@/type/formType';

const CardInfoContext = createContext({});

interface FormProps {
  children: ReactNode;
  cardInfo: FormValues;
  setCardInfo: Dispatch<SetStateAction<FormValues>>;
}

export const CardInfoProvider = ({
  children,
  cardInfo,
  setCardInfo,
}: FormProps) => {
  return (
    <CardInfoContext.Provider value={{ cardInfo, setCardInfo }}>
      {children}
    </CardInfoContext.Provider>
  );
};

export const useCardInfoContext = () => {
  const context = useContext(CardInfoContext) as FormProps;

  if (!context) {
    throw new Error('useCardInfoContext must be used within a FormProvider');
  }

  return context;
};
