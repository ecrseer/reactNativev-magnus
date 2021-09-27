import { useCallback, useState } from 'react';

const useDebounce = () => {
  const [time, setTime] = useState<any>(null);

  const debounce = useCallback(
    (callback, delay) => {
      if (time) {
        clearTimeout(time);
      }

      const timeout = setTimeout(() => {
        callback();
      }, delay);

      setTime(timeout);
    },
    [time],
  );

  const reset = useCallback(() => {
    if (time) {
      clearTimeout(time);
    }
  }, [time]);

  return { debounce, reset };
};

export default useDebounce;
