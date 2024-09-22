import { useEffect, useState } from 'react';

export const useDebounce = (inputValue: string) => {
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 1000);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

  return debouncedInputValue;
};
