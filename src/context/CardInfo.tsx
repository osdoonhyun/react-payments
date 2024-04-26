import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { FormValues } from '@/type/formType';
import { initialFormData } from '@/constants/form';

interface CardInfoContextType extends PropsWithChildren {
  cardInfo: FormValues;
  cardList: FormValues[];
  setCardInfo: Dispatch<SetStateAction<FormValues>>;
  addCard: (card: FormValues) => void;
  updateCard: (name: string, value: string, card: FormValues) => void;
  deleteCard: (card: FormValues) => void;
  resetCard: () => void;
}

const CardInfoContext = createContext<CardInfoContextType | null>(null);

export const CardInfoProvider = ({ children }: PropsWithChildren) => {
  const [cardInfo, setCardInfo] = useState<FormValues>(initialFormData);
  const [cardList, setCardList] = useState<FormValues[]>([]);

  const addCard = useCallback((card: FormValues) => {
    setCardList((prevCardList) => [...prevCardList, card]);
  }, []);

  const updateCard = useCallback(
    (name: string, value: string, card: FormValues) => {
      setCardList((prevCardList) =>
        prevCardList.map((prevCard) =>
          prevCard.cardNumber1 === card.cardNumber1
            ? { ...card, [name]: value }
            : prevCard
        )
      );
    },
    []
  );

  const deleteCard = useCallback((card: FormValues) => {
    setCardList((prevCardList) =>
      prevCardList.filter(
        (prevCard) => prevCard.cardNumber1 !== card.cardNumber1
      )
    );
  }, []);

  const resetCard = useCallback(() => {
    setCardInfo(initialFormData);
  }, []);

  const cardListContext = {
    cardInfo,
    cardList,
    setCardInfo,
    addCard,
    updateCard,
    deleteCard,
    resetCard,
  };

  return (
    <CardInfoContext.Provider value={{ ...cardListContext }}>
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
