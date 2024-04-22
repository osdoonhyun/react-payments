import {
  createContext,
  ReactNode,
  useContext,
  SetStateAction,
  Dispatch,
  useState,
} from 'react';
import { FormValues } from '@/type/formType';
import { initialFormData } from '@/constants/form';

interface FormProps {
  children: ReactNode;
  cardInfo: FormValues;
  setCardInfo: Dispatch<SetStateAction<FormValues>>;
}

interface CardInfoContextType extends FormProps {
  cardList: FormValues[];
  addCard: (card: FormValues) => void;
  updateCard: (name: string, value: string, card: FormValues) => void;
  deleteCard: (card: FormValues) => void;
  resetCard: () => void;
}

const CardInfoContext = createContext<CardInfoContextType | null>(null);

export const CardInfoProvider = ({
  children,
  cardInfo,
  setCardInfo,
}: FormProps) => {
  const [cardList, setCardList] = useState<FormValues[]>([]);

  const addCard = (card: FormValues) => {
    setCardList((prevCardList) => [...prevCardList, card]);
  };

  const updateCard = (name: string, value: string, card: FormValues) => {
    setCardList((prevCardList) =>
      prevCardList.map((prevCard) =>
        prevCard.cardNumber1 === card.cardNumber1
          ? { ...card, [name]: value }
          : prevCard
      )
    );
  };

  const deleteCard = (card: FormValues) => {
    setCardList((prevCardList) =>
      prevCardList.filter(
        (prevCard) => prevCard.cardNumber1 !== card.cardNumber1
      )
    );
  };

  const resetCard = () => {
    setCardInfo(initialFormData);
  };

  const cardListContext = {
    cardList,
    addCard,
    updateCard,
    deleteCard,
    resetCard,
  };

  return (
    <CardInfoContext.Provider
      value={{ cardInfo, setCardInfo, ...cardListContext }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCardInfoContext = () => {
  const context = useContext(CardInfoContext);

  if (!context) {
    throw new Error('useCardInfoContext must be used within a FormProvider');
  }

  return context;
};
