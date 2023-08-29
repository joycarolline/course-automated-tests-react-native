import {renderHook, act} from '@testing-library/react-native';
import {useCount} from './useCount';

it('should increment count', () => {
  const { result, rerender } = renderHook(
    (initialCount: number) => useCount(initialCount),
    { initialProps: 0 }
  );

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
    result.current.increment();
    result.current.increment();
  });

  expect(result.current.count).toBe(3);

  rerender(0); // Se for utilizar o zero, deve ser dessa forma.

  expect(result.current.count).toBe(0);
});
