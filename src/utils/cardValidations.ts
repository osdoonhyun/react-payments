import { FormValues } from '@/type/formType';

const CARD_NUMBER_REGEX = /^\d{4}$/;
const MONTH_REGEX = /^\d{1,2}$/;
const YEAR_REGEX = /^\d{2}$/;
const VERIFICATION_CODE_REGEX = /^\d{3}$/;
const PIN_NUMBER_REGEX = /^\d{1}$/;

export const CARD_HOLDER_NAME_MAX_LENGTH = 30;

const JANUARY = 1;
const DECEMBER = 12;

const isValidType = (value: unknown): boolean => {
  return !isNaN(Number(value));
};

const isValidCardNumber = (cardNumber: string) => {
  return CARD_NUMBER_REGEX.test(cardNumber);
};

const isValidMonth = (month: string) => {
  if (!MONTH_REGEX.test(month)) {
    return false;
  }

  return Number(month) >= JANUARY && Number(month) <= DECEMBER;
};

const isValidYear = (year: string) => {
  return YEAR_REGEX.test(year);
};

const isValidExpirationDate = (month: string, year: string) => {
  const currentDate = new Date();
  const expirationDate = new Date(`20${year}-${month}`);

  return currentDate < expirationDate;
};

const isValidCardHolderName = (cardHolderName: string) => {
  return cardHolderName.length <= CARD_HOLDER_NAME_MAX_LENGTH;
};

const isValidVerificationCode = (verificationCode: string) => {
  return VERIFICATION_CODE_REGEX.test(verificationCode);
};

const isValidPinNumber = (pinNumber: string) => {
  return PIN_NUMBER_REGEX.test(pinNumber);
};

export const cardValidate = (values: FormValues) => {
  const errors = {
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
    expirationMonth: '',
    expirationYear: '',
    cardHolderName: '',
    verificationCode: '',
    pinNumber1: '',
    pinNumber2: '',
  };

  if (!isValidCardNumber(values.cardNumber1)) {
    errors.cardNumber1 = '카드 번호는 4개의 숫자를 입력해 주세요.';
  }

  if (!isValidCardNumber(values.cardNumber2)) {
    errors.cardNumber2 = '카드 번호는 4개의 숫자를 입력해 주세요.';
  }

  if (!isValidCardNumber(values.cardNumber3)) {
    errors.cardNumber3 = '카드 번호는 4개의 숫자를 입력해 주세요.';
  }

  if (!isValidCardNumber(values.cardNumber4)) {
    errors.cardNumber4 = '카드 번호는 4개의 숫자를 입력해 주세요.';
  }

  if (!isValidType(values.expirationMonth)) {
    errors.expirationMonth = '유효하지 않은 형식입니다.';
  }

  if (!isValidType(values.expirationYear)) {
    errors.expirationYear = '유효하지 않은 형식입니다.';
  }

  if (!isValidMonth(values.expirationMonth)) {
    errors.expirationMonth = '월은 1이상 12이하 숫자여야 합니다.';
  }

  if (!isValidYear(values.expirationYear)) {
    errors.expirationYear = '유효한 연도가 아닙니다.';
  }

  if (!isValidExpirationDate(values.expirationMonth, values.expirationYear)) {
    errors.expirationYear = '만료일이 지난 카드입니다.';
  }

  if (!isValidCardHolderName(values.cardHolderName)) {
    errors.cardHolderName = '이름은 30자 이하로 입력해 주세요.';
  }

  if (!isValidVerificationCode(values.verificationCode)) {
    errors.verificationCode = '보안 코드는 숫자만 입력 가능합니다.';
  }

  if (isValidType(values.pinNumber1 || values.pinNumber2)) {
    errors.pinNumber1 = '유효하지 않은 형식입니다.';
  }

  if (!isValidPinNumber(values.pinNumber1)) {
    errors.pinNumber1 = '카드 비밀번호의 앞 2자리를 입력해 주세요.';
  }

  if (!isValidPinNumber(values.pinNumber2)) {
    errors.pinNumber2 = '카드 비밀번호의 앞 2자리를 입력해 주세요.';
  }

  return errors;
};
