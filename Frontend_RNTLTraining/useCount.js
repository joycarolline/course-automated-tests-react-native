import {useState, useEffect} from 'react';

export const useCount = initialCount => {
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(previousCount => previousCount + 1);

  return {count, increment};
};
