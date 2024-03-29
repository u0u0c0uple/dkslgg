import { useState, useEffect } from 'react';

const useDebounce = <T>(input: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [input, delay]);

  return debouncedValue;
};

export default useDebounce;
