import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

test('should set 0 as default value', () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);
});

test('should set 1 as default value', () => {
  const { result } = renderHook(() => useCounter(1));

  expect(result.current.count).toBe(1);
});

test('should increment count', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test('should decrement count', () => {
  const { result } = renderHook(() => useCounter(5));

  act(() => {
    result.current.decrement();
  });

  expect(result.current.count).toBe(4);
});

test('should set count', () => {
  const { result } = renderHook(() => useCounter(5));

  act(() => {
    result.current.setCount(15);
  });

  expect(result.current.count).toBe(15);
});
