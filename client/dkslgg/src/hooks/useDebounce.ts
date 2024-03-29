import { useCallback, useRef, useEffect } from 'react';

const useDebounce = <T extends (...args: any[]) => any>(
  e: any,
  callback: T,
  delay: number
) => {
  const callbackRef = useRef<T>(callback);

  const debouncedCallback = useCallback(
    (e: any) => {
      callbackRef.current(e);
    },
    [callbackRef]
  );

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = setTimeout(() => {
      debouncedCallback(e);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedCallback, delay]);

  return debouncedCallback;
};

export default useDebounce;
