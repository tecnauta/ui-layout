import { useState, useCallback } from 'react';

export default function useBoolean(initial?: boolean | (() => boolean)): [boolean, () => void, () => void, () => void] {
  const [value, setValue] = useState(initial ?? false);
  const toogleValue = useCallback(() => setValue(value => !value), []);
  const toTrue = useCallback(() => setValue(() => true), []);
  const toFalse = useCallback(() => setValue(() => false), []);

  return [value, toogleValue, toTrue, toFalse];
}
