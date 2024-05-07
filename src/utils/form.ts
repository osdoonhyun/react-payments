export const hasErrors = (errorFields: (string | undefined)[]) =>
  errorFields.some(Boolean);

export const allTouched = (touchedFields: (boolean | undefined)[]) =>
  touchedFields.every(Boolean);

export const findErrorMessage = (errorFields: (string | undefined)[]) =>
  errorFields.find(Boolean);

export const formatMonthValue = (value: string) => {
  if (value.length === 1) {
    return value.padStart(2, '0');
  }

  return value;
};
