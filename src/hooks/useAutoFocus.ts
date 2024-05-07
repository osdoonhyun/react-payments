import { createRef, useState } from 'react';

interface UseAutoFocusProps {
  amount: number;
}

interface HandleAutoFocusProps {
  index: number;
  value: string;
  maxLength: number;
}

export const useAutoFocus = ({ amount }: UseAutoFocusProps) => {
  const [autoFocusRefs] = useState<React.RefObject<HTMLInputElement>[]>(
    Array.from({ length: amount + 1 }, () => createRef<HTMLInputElement>())
  );

  const handleAutoFocus = ({
    value,
    maxLength,
    index,
  }: HandleAutoFocusProps) => {
    const nextFieldIndex = index + 1;

    if (value.length >= maxLength && nextFieldIndex < autoFocusRefs.length) {
      autoFocusRefs[nextFieldIndex].current?.focus();
    }
  };

  return { autoFocusRefs, handleAutoFocus };
};
