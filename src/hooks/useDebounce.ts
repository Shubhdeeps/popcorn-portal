import { useEffect, useState } from "react";

export function useDebounce<T>(initValue: T, delay: number = 500) {
  const [value, setValue] = useState<T>(initValue);
  const [debouncedValue, setDebouncedValue] = useState<T>();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return [debouncedValue, setValue] as const;
}
